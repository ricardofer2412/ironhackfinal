zip -r backend.zip ../backend
scp -i emailBE.pem backend.zip ec2-user@18.204.212.160:~/
#mv /tmp/node_modules ./expressApp/node_modules
