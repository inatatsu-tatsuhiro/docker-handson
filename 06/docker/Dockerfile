FROM python:3.8

RUN apt-get update && apt-get install -y

COPY requirements.txt /app/

RUN pip install --upgrade pip && pip install -r /app/requirements.txt

ENV TOKEN 'your API token'
