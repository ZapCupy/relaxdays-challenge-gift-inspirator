FROM python:3.8

WORKDIR /app

RUN pip install pipenv
COPY Pipfile Pipfile.lock /app/
RUN pipenv install --system --deploy

# TODO Build project source and dependencies.

# TODO Specify end point.
