<script>
    import faker from "@faker-js/faker";
    import TableRow from "./TableRow.svelte";
    import TableHead from "./TableHead.svelte";

    const fakerPeople = [];

    for (let i = 0; i < 100; i++) {
    fakerPeople.push({
      name: faker.name.findName(),
      avatar: faker.image.avatar(),
      vehicle: faker.vehicle.vehicle(),
      advice: faker.hacker.phrase(),
    });
  }

</script>


<table class="table">
    <TableHead column1="Name: " column2="Avatar: " column3="Vehicle: " column4="Advice: "
    />

    {#each fakerPeople as fakerPerson}
    <TableRow 
    name={fakerPerson.name} 
    image={fakerPerson.avatar} 
    vehicle={fakerPerson.vehicle} 
    hacker={fakerPerson.advice}
    />
    {/each}

</table>




