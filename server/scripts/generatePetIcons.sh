# Use me to generate a list of URLs to use for the pet icons.

url=https://dog.ceo/api/breeds/image/random

for i in {1..150}
do
  curl ${url} | jq -r '.message' >> /data/peticon.txt
done