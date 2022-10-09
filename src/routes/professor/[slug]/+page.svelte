<script>
	import { each } from 'svelte/internal';
  import { Moment } from 'moment';


	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>{data.title}</h1>
<div>{@html data.content}</div>

{#each data.classes as classroom}
  <div>
    {#each Object.entries(classroom) as [professor, subject]}
      {professor} - {subject[0]}
      {#each subject[1] as meeting}
        <div>{meeting.days} | {meeting.start_time} through {meeting.end_time}</div>
      {/each}
    {/each}
  </div>
{/each}

<!-- {#each data.classes as c}
  {#each Object.entries(c) as b}
  <div>{b}</div>
  {/each}
{/each} -->