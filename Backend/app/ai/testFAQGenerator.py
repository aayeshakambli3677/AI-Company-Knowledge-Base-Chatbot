from app.ai.faq_generator import FAQGenerator

doc = """
Employees are entitled to 12 casual leaves.
Office timing is 9:30 AM to 6:30 PM.
"""

faq = FAQGenerator()

print(faq.generate_faqs(doc))