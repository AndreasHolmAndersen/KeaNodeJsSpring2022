<script>
    import Apple from "../Tree/Apple.svelte";

    let apples = ["🍏", "🍎", "🍏", "🍎", "🍏", "🍎", "🍏", "🍎"];

    function pickAnApple() {
        console.log("Picked an apple");
        apples.pop();
        apples = apples;
    }
</script>

<div id="flex">
    <div id="tree">
        <h1>Tree</h1>
        {#each apples as apple}
            <Apple {apple} />
        {/each}
        <button on:click={pickAnApple}>Pick an apple</button>
        
    </div>
    

    <div id="trunk" />
</div>

<style>
    #tree {
        background-color: lightgreen;
        width: 500px;
        border-radius: 100px;
    }
    #trunk {
        background-color: saddlebrown;
        height: 120px;
        width: 50px;
    }
    #flex {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
