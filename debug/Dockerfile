FROM debian:bullseye
RUN ["/usr/bin/apt", "update"]
RUN ["/usr/bin/apt", "install", "neovim", "mc", "-y"]
RUN ["/usr/bin/apt", "install", "-y", "locales"]
RUN ["/bin/rm", "-rf", "/var/lib/apt/lists/*"]
RUN ["localedef", "-i", "ru_RU", "-c", "-f", "UTF-8", "-A", "/usr/share/locale/locale.alias", "ru_RU.UTF-8"]
ENV LANG ru_RU.utf8
ENTRYPOINT ["tail", "-f", "/dev/null"]

