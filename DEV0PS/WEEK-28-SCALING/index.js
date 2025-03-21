import express from "express";
import cluster from "cluster";
import os from "os";

const totalCPUs = os.cpus().length;

const port = 3000;

if (cluster.isPrimary) {
  console.log(`Number of CPUs is ${totalCPUs}`);
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < totalCPUs; i++) {
    console.log("forked");
    cluster.fork();
  }
} else {
  const app = express();
  console.log(`Worker ${process.pid} started`);

  let BIG_NUM=1000000000000000000



  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}