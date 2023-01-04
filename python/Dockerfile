FROM python:bullseye
WORKDIR /srv
COPY *.* ./
RUN ["/usr/bin/apt", "update"]
RUN ["/usr/bin/apt", "install", "python3-pip", "-y"]
RUN ["/usr/bin/python3", "-m", "pip", "install", "-r",  "requirements.txt"]
EXPOSE 8084
ENTRYPOINT ["/usr/bin/python3", "main.py"]

