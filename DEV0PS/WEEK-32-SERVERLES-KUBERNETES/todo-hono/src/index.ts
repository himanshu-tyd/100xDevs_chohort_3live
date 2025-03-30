import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const app = new Hono();

app.post('/', async (c) => {
  // Todo add zod validation here
  const body: {
    name: string;
    email: string;
    password: string
  } = await c.req.json()


  const prisma = new PrismaClient({
      datasourceUrl:"",
  }).$extends(withAccelerate())

  console.log(body)

  await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: body.password
    }
  })
  
  return c.json({msg: "as"})
})

app.get("/api/user", (c) => {




  return c.json({
    message: "user is Himanshu",
  });
});

app.get("/api/todo", (c) => {
  return c.json({ todo: "todos are here" });
});

app.post("/api/signup", async (c) => {
  const body = await c.req.json();

  console.log(body);


 

  return c.json({
    data: body,
  });
});

export default app;
