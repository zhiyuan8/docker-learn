gcloud compute instances create wordpress \
--machine-type g1-small \
--zone us-central1-a \
--image-family ubuntu-1804-lts \
--image-project ubuntu-os-cloud \
--tags http-server
