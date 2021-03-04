<h1>Objectives</h1>
<ol>
   <li>describe what a searching algorithm is</li>
   <li>implement linear search on arrays</li>
   <li>implement binary search on sorted arrays</li>
   <li>implement a naive string searching algorithm</li>
   <li>implement the kmp string searching algorithm</li>
</ol>

<h1>How do we search </h1>
<h2>java Script has following ways </h2>
 <ol>
   <li>indexOf()</li>
   <li>includes()/li>
   <li>find()</li>
   <li>findIndexOf()</li>
   
</ol>
<h1>1.linear Search</h1>
<p>
  <ol>
  <li>accepts array and a value.</li>
  <li>loop through the araay and check if the current array element is equal to the value.</li>
  <li>if it is,thern return the index of tha element or return -1</li>
  <li>O(n)</li>
  </ol>

</p>

<h1>2.Binary Search</h1>
<ol>
<li>uses sorted array</li>
<li>create a left=start and right=length-1 pointer</li>
<li>while left pointer comes before the right</li>
   <ol>
   <li>create a pointer in the middle</li>
   <li>if you find the value you want return index</li>
   <li>if value is too small,move the left pointer up</li>
   <li>if value is too large,move the right pointer down</li>
   </ol>
 <li>if you never found the value return -1</li>  
</ol>