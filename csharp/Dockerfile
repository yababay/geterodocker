FROM debian:bullseye
RUN mkdir /app
WORKDIR /app
RUN apt update
RUN apt install wget neovim -y
RUN wget https://dot.net/v1/dotnet-install.sh
RUN chmod +x dotnet-install.sh
RUN ./dotnet-install.sh
EXPOSE 5000
ENV DOTNET_ROOT=/root/.dotnet
ENV PATH=$PATH:$DOTNET_ROOT:$DOTNET_ROOT/tools
ENV DOTNET_SYSTEM_GLOBALIZATION_INVARIANT=1
RUN ["/root/.dotnet/dotnet", "new", "webapi", "-o", "project"]
WORKDIR /app/project
COPY Program.cs .
COPY Hello* Controllers/
RUN ["/root/.dotnet/dotnet", "build"]
WORKDIR  /app/project/bin/Debug/net6.0
ENTRYPOINT ["./project", "--urls", "http://0.0.0.0:8081"]

