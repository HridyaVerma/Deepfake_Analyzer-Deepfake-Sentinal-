import os
import cv2
import imagehash
from PIL import Image


def extract_frames(video_path, output_folder="extracted_frames", frame_count=10):
    """
    Extracts evenly spaced frames from the video and saves them as images.
    Returns a list of saved frame paths.
    """
    os.makedirs(output_folder, exist_ok=True)

    cap = cv2.VideoCapture(video_path)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    step = max(total_frames // frame_count, 1)

    frame_paths = []
    idx = 0
    count = 0

    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break

        if count % step == 0:
            frame_filename = f"frame_{idx}.jpg"
            frame_path = os.path.join(output_folder, frame_filename)
            cv2.imwrite(frame_path, frame)
            frame_paths.append(frame_path)
            idx += 1

        count += 1

    cap.release()
    return frame_paths


def generate_frame_hashes(video_path, frame_count=10):
    """
    Extracts frames and returns a list of perceptual hashes for each.
    """
    cap = cv2.VideoCapture(video_path)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    step = max(total_frames // frame_count, 1)

    frame_hashes = []
    count = 0

    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break

        if count % step == 0:
            pil_img = Image.fromarray(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB))
            phash = str(imagehash.phash(pil_img))
            frame_hashes.append(phash)

        count += 1

    cap.release()
    return frame_hashes