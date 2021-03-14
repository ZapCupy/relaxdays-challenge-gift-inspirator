# 🧑‍💻 relaxdays-challenge-gift-inspirator

This project was created in the Relaxdays Code Challenge Vol. 1.
See the [hackathon homepage](https://sites.google.com/relaxdays.de/hackathon-relaxdays/startseite) for more information.
Our participant ID in the challenge were: `CC-VOL1-54` and `CC-VOL1-62`

We haven't really come far with our implementation.
Though, the idea would be to write an extendable React frontend app with a Python backend for generating gift ideas.

## Usage

First you need to clone this repository:

```shell script
git clone https://github.com/ZapCupy/relaxdays-challenge-gift-inspirator.git
cd relaxdays-challenge-gift-inspirator/
```

### Docker Compose

1. Install [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/).
1. Run this project:

   ```shell script
   docker-compose up
   ```

1. The frontend is now running on [`localhost:3000`](http://localhost:3000/) and the backend on [`localhost:3000`](http://localhost:3000/).

### Local machine

#### Backend

1. Install [Python 3](https://python.org/downloads/), [pipx](https://pipxproject.github.io/pipx/installation/#install-pipx), and [Pipenv](https://pipenv.pypa.io/en/latest/install/#isolated-installation-of-pipenv-with-pipx)
1. Install dependencies:

    ```shell script
    pipenv install
    ```

1. Run the notebook:

    ```shell script
    pipenv run python server.py
    ```

1. The backend is now running on [`localhost:5000`](http://localhost:5000/)

#### Frontend

1. Install [Node](https://yarnpkg.com/) and [Yarn](https://yarnpkg.com/).
1. Install dependencies:

   ```shell script
   yarn install
   ```

1. Run the app:

   ```shell script
   yarn start
   ```

1. The frontend is now running on [`localhost:3000`](http://localhost:3000/)

## License

This repository is licensed under the [MIT License](LICENSE).
