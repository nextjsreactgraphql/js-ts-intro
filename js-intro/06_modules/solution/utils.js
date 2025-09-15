export function birthday(persons, name) {
  return persons.map(p =>
    p.name === name
      ? {
          ...p,
          age: p.age + 1
        }
      : p
  );
}

export function greet({ name }) {
  console.log(`Hello, ${name}`);
}
