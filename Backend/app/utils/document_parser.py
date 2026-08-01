from pypdf import PdfReader
from docx import Document


def extract_text(file_path):

    if file_path.endswith(".pdf"):

        reader = PdfReader(file_path)

        text = ""

        for page in reader.pages:
            page_text = page.extract_text()

            if page_text:
                text += page_text + "\n"

        return text

    elif file_path.endswith(".docx"):

        doc = Document(file_path)

        return "\n".join(
            para.text
            for para in doc.paragraphs
        )

    return ""