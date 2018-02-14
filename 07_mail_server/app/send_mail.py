import smtplib
from email.mime.text import MIMEText

sender = 'Sender <sender@example.org>'
receiver = 'Receiver <receiver@example.com>'

msg = MIMEText('This is a test message')
msg['Subject'] = 'Test subject'
msg['From'] = sender
msg['To'] = receiver

s = smtplib.SMTP('smtp')
s.sendmail(sender, [receiver], msg.as_string())
s.quit()
