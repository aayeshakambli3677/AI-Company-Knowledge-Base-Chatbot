import os
import shutil
from pathlib import Path


class FileHandler:
    """
    Handles file upload, save, delete, and listing operations.
    """

    def __init__(self, upload_folder="uploads"):
        self.upload_folder = upload_folder
        os.makedirs(self.upload_folder, exist_ok=True)

    def save_file(self, source_path: str) -> str:
        """
        Save a file into the uploads folder.
        """

        filename = os.path.basename(source_path)
        destination = os.path.join(self.upload_folder, filename)

        shutil.copy(source_path, destination)

        return destination

    def delete_file(self, filename: str) -> bool:
        """
        Delete a file from uploads.
        """

        filepath = os.path.join(self.upload_folder, filename)

        if os.path.exists(filepath):
            os.remove(filepath)
            return True

        return False

    def list_files(self):
        """
        Return list of uploaded files.
        """

        return os.listdir(self.upload_folder)

    def file_exists(self, filename: str):
        """
        Check whether file exists.
        """

        return os.path.exists(
            os.path.join(self.upload_folder, filename)
        )


# -------------------------
# Example
# -------------------------
if __name__ == "__main__":

    handler = FileHandler()

    print(handler.list_files())