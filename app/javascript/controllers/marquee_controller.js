import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  // static targets = ["scroller"]
  connect() {
    console.log("The scroll is connected")
    const items = [...document.getElementsByClassName('list__item')];
    const containerElem = document.getElementById('containerElem');
    const leftSideOfContainer = containerElem.getBoundingClientRect().left;
    const listElem = document.getElementById('list');
    let currentLeftValue = 0;

    window.setInterval(animationLoop, 2);

    function animationLoop() {
      const firstListItem = listElem.querySelector('.list__item:first-child');

      let rightSideOfFirstItem = firstListItem.getBoundingClientRect().right;

      /*
        If first list item is out of viewable area, move it to the end of the list.
        Also, set the current left value to -1 so we won't stutter.
      */
      if(rightSideOfFirstItem == leftSideOfContainer){
        currentLeftValue = -1;
        listElem.appendChild(firstListItem);
      }

      // The part that keeps it all going: animating the margin left value of the list.
      listElem.style.marginLeft = `${currentLeftValue}px`;
      currentLeftValue--;
    }
  }
}

// document.addEventListener('DOMContentLoaded', _ => {
//   /*
//     Quick whip-up of an idea posed by a client: a bar filled with logo's that move to the left slowly and infinitely.
//     I checked if the <marquee> tag was still working (and it is), but it's considered invalid html now so I needed something else.
//   */

//   const items = [...document.getElementsByClassName('list__item')];
//   const containerElem = document.getElementById('containerElem');
//   const leftSideOfContainer = containerElem.getBoundingClientRect().left;
//   const listElem = document.getElementById('list');
//   let currentLeftValue = 0;

//   // Kick off for the animation function.
//   window.setInterval(animationLoop, 5);

//   /*
//     Looks at first item in the list and checks if it goes out of the visible area
//     by comparing the right position of the first list item to the left position
//     of the containing element.
//   */
//   function animationLoop() {
//     const firstListItem = listElem.querySelector('.list__item:first-child');

//     let rightSideOfFirstItem = firstListItem.getBoundingClientRect().right;

//     /*
//       If first list item is out of viewable area, move it to the end of the list.
//       Also, set the current left value to -1 so we won't stutter.
//     */
//     if(rightSideOfFirstItem == leftSideOfContainer){
//       currentLeftValue = -1;
//       listElem.appendChild(firstListItem);
//     }

//     // The part that keeps it all going: animating the margin left value of the list.
//     listElem.style.marginLeft = `${currentLeftValue}px`;
//     currentLeftValue--;
//   }
// });
