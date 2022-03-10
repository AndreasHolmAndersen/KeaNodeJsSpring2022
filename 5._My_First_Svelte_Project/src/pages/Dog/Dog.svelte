<script>
import Nametag from "../../components/Nametag/Nametag.svelte";

    const jimmi = {
        name: "Jimmi the Dog",
        age: 4,
        address: "Dog boulevard",
    };
</script>

<h1 id="dog" on:mouseover={() => console.log("Wooof")} on:focus>🐶</h1>
 <Nametag nametagInfo={jimmi}/>
<style>
    #dog {
        font-size: 100px;
    }
</style>
