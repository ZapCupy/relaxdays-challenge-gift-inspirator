FROM python:3.8

WORKDIR /app

RUN pip install pipenv
COPY Pipfile Pipfile.lock ./
RUN pipenv install --system --deploy

COPY . ./

EXPOSE 5000

CMD python server.py