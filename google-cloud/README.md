# Google cloud

# Beginner tutorials
[Google cloud CLI](https://cloud.google.com/sdk/docs/install-sdk)  

# GCP CLI
config gcloud alias. Refer to [this](https://stackoverflow.com/questions/61335452/google-cloud-sdk-bash-inc-not-found-after-upgrading-to-macos-catalina) if gcloud not found on macOS Catalina. Simply, change the path.bash.inc into path.zsh.inc in ~/.bash_profile, same as the completion.zsh.inc.
```
source ~/.bash_profile
```
on console, SSH -> view gcloud commands, and paste below in terminal
```
sudo gcloud auth login
sudo gcloud compute ssh --zone "us-central1-a" "instance-1"  --project "steady-shard-332922"
```

