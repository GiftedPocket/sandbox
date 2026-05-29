<template>
    <table class="root">
        <tr v-for="[doNumber, doneNumbers] in timesMap.entries()" :key="doNumber" :data-number=doNumber>
            <th>
                {{ doNumber }}のだん
            </th>
            <td v-for="done in doneNumbers" :key=done :data-step=doNumber :data-done-number=done>
                <span>{{ doNumber * done }}</span>
            </td>
        </tr>
    </table>
</template>
<script setup lang="ts">

const timesRecord = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const timesMap = new Map<number, number[]>();
timesRecord.forEach(e => {
    timesMap.set(e, [...timesRecord]);
})

</script>
<style scoped>
table {
    width: 100%;
    font-size: 2rem;
    table-layout: fixed;
    padding-right: 2rem;
    padding-left: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
}

th {
    width: 10rem;
}

td {
    text-align: center;
    position: relative;
}

td::before {
    content: "+" attr(data-step);
    position: absolute;
    left: 0;
    transform: translateX(-50%);
    font-size: 0.8rem;
}

td:first-of-type::before {
    content: none;
}

.root {
    --num-color-1: #FFB3B3;
    --num-color-2: #FFD1B3;
    --num-color-3: #FFFFB3;
    --num-color-4: #D1FFB3;
    --num-color-5: #B3FFB3;
    --num-color-6: #B3FFFF;
    --num-color-7: #B3D1FF;
    --num-color-8: #C4B3FF;
    --num-color-9: #FFB3FF;
}

td[data-done-number="1"]>span,
tr[data-number="1"] {
    color: var(--num-color-1);
}

td[data-done-number="2"]>span,
tr[data-number="2"] {
    color: var(--num-color-2);
}

td[data-done-number="3"]>span,
tr[data-number="3"] {
    color: var(--num-color-3);
}

td[data-done-number="4"]>span,
tr[data-number="4"] {
    color: var(--num-color-4);
}

td[data-done-number="5"]>span,
tr[data-number="5"] {
    color: var(--num-color-5);
}

td[data-done-number="6"]>span,
tr[data-number="6"] {
    color: var(--num-color-6);
}

td[data-done-number="7"]>span,
tr[data-number="7"] {
    color: var(--num-color-7);
}

td[data-done-number="8"]>span,
tr[data-number="8"] {
    color: var(--num-color-8);
}

td[data-done-number="9"]>span,
tr[data-number="9"] {
    color: var(--num-color-9);
}
</style>