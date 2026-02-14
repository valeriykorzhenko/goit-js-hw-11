import{a as d,S as m,i as a}from"./assets/vendor-DQiTczw4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",g="54657823-2f0cb049819a58dcbd4ca359d";function y(i){const r={key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(p,{params:r}).then(o=>o.data.hits)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),h=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function b(){l.innerHTML=""}function L(){c.classList.remove("is-hidden")}function S(){c.classList.add("is-hidden")}function q(i){const r=i.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:n,comments:u,downloads:f})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${s}">
    <img class="gallery-image" src="${o}" alt="${e}" />
  </a>

  <ul class="info">
    <li class="info-item"><b>Likes</b> ${t}</li>
    <li class="info-item"><b>Views</b> ${n}</li>
    <li class="info-item"><b>Comments</b> ${u}</li>
    <li class="info-item"><b>Downloads</b> ${f}</li>
  </ul>
</li>
`).join("");l.insertAdjacentHTML("beforeend",r),h.refresh()}const E=document.querySelector(".form");E.addEventListener("submit",P);function P(i){i.preventDefault();const r=i.target.elements["search-text"],o=r.value.trim();if(!o){a.error({message:"Please enter a search query",position:"topRight"});return}r.value="",r.blur(),b(),L(),y(o).then(s=>{if(!s.length){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}q(s)}).catch(()=>{a.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{S()})}
//# sourceMappingURL=index.js.map
