import axios from 'axios';

const url = 'http://localhost:3333';
const name = '1234567890';
const email = 'thalesdev22@1234567890.com';

it('must create a user', async () => {
  const response = await axios.post(`${url}/users`, {
    name: name,
    email: email,
  });
  const user: any = response.data;
  expect(user).toHaveProperty('id');
  expect(user.name).toBe(name);
  expect(user.email).toBe(email);
  await axios.delete(`${url}/delete/${user.id}`);
});

it('must list a user by id', async () => {
  const response = await axios.post(`${url}/users`, {
    name: name,
    email: email,
  });
  const user: any = response.data;

  const list = await axios.get(`${url}/find/${user.id}`);
  const listData: any = list.data;
  expect(list.status).toBe(200);

  await axios.delete(`${url}/delete/${listData.id}`);
});

it('must list all users', async () => {
  const user1: any = await axios.post(`${url}/users`, {
    name: name,
    email: email,
  });
  const user2: any = await axios.post(`${url}/users`, {
    name: name,
    email: email,
  });
  const user3: any = await axios.post(`${url}/users`, {
    name: name,
    email: email,
  });

  const response: any = await axios.get(`${url}/find-all`, {
    params: {
      take: 3,
      skip: 1,
    },
  });
  expect(response.status).toBe(200);
  expect(response.data).toHaveLength(3);

  await axios.delete(`${url}/delete/${user1.data.id}`);
  await axios.delete(`${url}/delete/${user2.data.id}`);
  await axios.delete(`${url}/delete/${user3.data.id}`);
});

it("must update a user's data by id", async () => {
  const response = await axios.post(`${url}/users`, {
    name: name,
    email: email,
  });
  const user: any = response.data;

  const update: any = await axios.put(`${url}/update/${user.id}`, {
    name: 'Thales22',
    email: 'Thlaesdev22@gmail.com',
  });
  expect(update.status).toBe(200);

  await axios.delete(`${url}/delete/${user.id}`);
});

it('must delete a user by id', async () => {
  const response = await axios.post(`${url}/users`, {
    name: name,
    email: email,
  });
  const user: any = response.data;

  await axios.delete(`${url}/delete/${user.id}`);
});
