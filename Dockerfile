FROM docker.io/oven/bun:1.3.8-slim

WORKDIR /app
ENV NODE_ENV=production

COPY .next/standalone ./
COPY .next/static ./.next/static
COPY public ./public

EXPOSE 3000

CMD ["bun", "server.js"]
