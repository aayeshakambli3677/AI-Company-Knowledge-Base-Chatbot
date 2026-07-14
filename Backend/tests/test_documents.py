import os
import tempfile

from app.utils.file_handler import FileHandler
from app.utils.pdf_utils import PDFUtils
from app.utils.docx_utils import DOCXUtils


def test_file_handler():
    """
    Test FileHandler object creation.
    """
    handler = FileHandler()

    assert handler is not None


def test_pdf_utils():
    """
    Test PDF utility object creation.
    """
    pdf = PDFUtils()

    assert pdf is not None


def test_docx_utils():
    """
    Test DOCX utility object creation.
    """
    docx = DOCXUtils()

    assert docx is not None


def test_upload_directory_exists():
    """
    Test upload directory creation.
    """
    handler = FileHandler()

    assert os.path.exists(handler.upload_folder)