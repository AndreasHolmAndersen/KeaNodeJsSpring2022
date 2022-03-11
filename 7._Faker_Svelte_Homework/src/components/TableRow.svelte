<script>
    export let name;
    export let hacker;
    export let image;
    export let vehicle;
</script>

<tbody>
    <tr>
        <td class="tablerow tablerow-name"> {name}</td>

        <td class="tablerow tablerow-image">
            <img src={image} alt="This is my avatar" />
        </td>

        <td class="tablerow tablerow-vehicle"> {vehicle}</td>

        <td class="tablerow tablerow-hacker"> {hacker}</td>
    </tr>
</tbody>

<style>
.tablerow {
    border: 1px solid black;
}
    
</style>