<script>
    import { getProfessors } from './professorNames.js';
    import ListItem from './ListItem.svelte';	
    import { goto } from '$app/navigation';

        
        
    /* FILTERING ITEMS DATA BASED ON INPUT */	
    let filteredResults = [];
   
    const filterInput = () => {
        let storageArr = []
        if (inputValue) {
            console.log();
            getProfessors().forEach(item => {
                 if (item.toLowerCase().startsWith(inputValue.toLowerCase())) {
                     storageArr = [...storageArr, makeMatchBold(item)];
                 }
            });
        }
        filteredResults = storageArr;
    }	
    
    
    /* HANDLING THE INPUT */
    let searchInput; // use with bind:this to focus element
    let inputValue = "";
        
    $: if (!inputValue) {
        filteredResults = [];
        hiLiteIndex = null;
    }
    
    const clearInput = () => {
        inputValue = "";	
        searchInput.focus();
    }
        
    const setInputVal = (itemName) => {
        inputValue = removeBold(itemName);
        filteredResults = [];
        hiLiteIndex = null;
        document.querySelector('#item-input').focus();
    }	
    
    const submitValue = () => {
        if (inputValue) {
            console.log(`${inputValue} is submitted!`);
            goto(`/professor/${inputValue}`)
        } else {
            alert("You didn't type anything.")
        }
    }
    
    const makeMatchBold = (str) => {
        let matched = str.substring(0, inputValue.length);
        let makeBold = `<strong>${matched}</strong>`;
        let boldedMatch = str.replace(matched, makeBold);
        return boldedMatch;
    }
    
    const removeBold = (str) => {
        //replace < and > all characters between
        return str.replace(/<(.)*?>/g, "");
    }	
        
    
    /* NAVIGATING OVER THE LIST OF ITEMS W HIGHLIGHTING */	
    let hiLiteIndex = null;
        
    const navigateList = (e) => {
        if (e.key === "ArrowDown" && hiLiteIndex <= filteredResults.length-1) {
            hiLiteIndex === null ? hiLiteIndex = 0 : hiLiteIndex += 1
        } else if (e.key === "ArrowUp" && hiLiteIndex !== null) {
            hiLiteIndex === 0 ? hiLiteIndex = filteredResults.length-1 : hiLiteIndex -= 1
        } else if (e.key === "Enter") {
            setInputVal(filteredResults[hiLiteIndex]);
        } else {
            return;
        }
    } 
    </script>
    
    
    <svelte:window on:keydown={navigateList} />
    
    <form autocomplete="off" on:submit|preventDefault={submitValue}>
      <div class="autocomplete">
        <input id="item-input" 
                         type="text" 
                         placeholder="Search Names" 
                         bind:this={searchInput}
                         bind:value={inputValue} 
                         on:input={filterInput}>
      </div>
        
      <input type="submit" class="button">
        
        <!-- FILTERED LIST OF ITEMS -->
        {#if filteredResults.length > 0}
            <ul id="autocomplete-items-list">
                {#each filteredResults as item, i}
                    <ListItem itemLabel={item} highlighted={i === hiLiteIndex} on:click={() => setInputVal(item)} />
                {/each}			
            </ul>
        {/if}
    </form>
        
        
    <style>
    div.autocomplete {
      /*the container must be positioned relative:*/
      position: relative;
      display: inline-block;
        width: 300px;
    }
    input {
      border: 1px solid transparent;
      background-color: #f1f1f1;
      padding: 10px;
      font-size: 16px;
        margin: 0;
    }
    input[type=text] {
      background-color: #f1f1f1;
      width: 100%;
    }
    input[type=submit] {
      background-color: DodgerBlue;
      color: #fff;
    }
        
    #autocomplete-items-list {
        position: relative;
        margin: 0;
        padding: 0;
        top: 0;
        width: 297px;
        border: 1px solid #ddd;
        background-color: #ddd;
    }	
    </style>	