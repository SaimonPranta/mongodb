Here is the version with just the steps and the necessary run commands:

### Step 1: Stop MongoDB Service 
net stop MongoDB 

### Step 2: Edit `mongod.cfg` File (C:\Program Files\MongoDB\Server\<your-version>\bin\mongod.cfg)
  replication:
    replSetName: "rs0" 

### Step 3: Start MongoDB Service 
net start MongoDB 

### Step 4: Initialize Replica Set 
mongosh 

### Step 5: Run this in mongo Shell
rs.initiate() 

## **For Linux**

### Step 1: Stop MongoDB Service 
sudo systemctl stop mongod 

### Step 2: Edit `mongod.cfg` File (/etc/mongod.conf)
replication:
    replSetName: "rs0"

### Step 3: Start MongoDB Service 
sudo systemctl start mongod 

### Step 4: Initialize Replica Set 
mongosh 

### Step 5: Run this in mongo Shell
rs.initiate() 

## **For macOS**

### Step 1: Stop MongoDB Service 
brew services stop mongodb

### Step 2: Edit `mongod.cfg` File (/usr/local/etc/mongod.conf)
replication:
  replSetName: "rs0"

### Step 3: Start MongoDB Service 
brew services start mongodb

### Step 4: Initialize Replica Set 
mongosh 

### Step 5: Run this in mongo Shell
rs.initiate() 

This simplified version provides only the steps with the relevant commands.
