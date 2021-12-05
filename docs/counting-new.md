---
layout: default
title: counting
---

# Listing & counting stitches

## Contents

* [Introduction](#introduction)
* [Results](#results)
* [Method used](#method-used)
* [Listing and counting](#listing-and-counting)

{% include p-l-c.html
  src="/MAE-gf/images/counting/IMG_1039_SP.jpg"
  alt="Meander"
  lnk="/GroundForge/tiles?patchWidth=6&patchHeight=12&h1=-&c1=clcr&b1=crcl&a1=rctctctctt&h2=lctctctctt&c2=clcr&b2=crcl&a2=-&footside=r,1&tile=88,11&headside=8,r&footsideStitch=ctctt&tileStitch=ctct&headsideStitch=ctctt&shiftColsSW=0&shiftRowsSW=2&shiftColsSE=2&shiftRowsSE=2"
  title="Meander"
%}  

## Introduction

A stitch is made by crossing and twisting two pairs of bobbins. With “twist” we mean: twist both pairs, twist right pair, or twist left pair. We can abbreviate this with "C" (cross), "T" (twist both pairs), "R" (twist right pair) and "L" (twist left pair). For listing and counting stitches we consider only stitches that start and end with a cross. Twists before the first cross and after the last are viewed as actions between stitches.        

A stitch can be described by a <u>word</u> formed from the symbols "C", "L", "R", "T". These words have to obey certain rules. These rules come from observing examples of real lace, and from some limits we set ourselves in this document.    
To help us count and catalogue the words representing stitches, the symbols are ordered: "C" before "T", "T" before "R", "R" before "L".            

<span class="b-red">Please note</span>: the following rules are to be applied for counting and cataloguing only.       

## Results

A complete list of stitch words of the specified length can be downloaded as a .txt file by clicking on "results" in the corresponding row of the table below.       
The first row of the file shows counts for the number of words. The words are grouped by their symmetry: first the words that are completely symmetric ("b=p=q=d"), then the words that are left-right-symmetric ("b=d"), etc.     
Words with two consequtive C's are written in lower case. 

Please note: only one orientation of each word is listed. See [how to make mirrored words](#how-to-make-mirrored-words) to create the other orientations.     
Please note: the following list consists of words starting and ending with "C". In practice, any number of twists can be applied to the left pair or right pair travelling between two stitches.     

<table class="cctt">
  <tr><th>word length</th>
    <th>count</th>
    <th>subset without "CC"</th>
    <th>symmetric words (b=d=p=q)</th>
    <th>results</th>
    <th>download results</th>
  </tr>
 
  <tr><td> 1 </td>
    <td> 1 </td>
    <td> 1 </td>
    <td> 1 </td>
    <td> C , however, a ground with only "C" will fall apart </td> 
    <td><a href="../documents/counting/c..c_length1.txt" download>results</a></td></tr>
  
  <tr><td> 2 </td>
    <td> 1 </td>
    <td> 0 </td>
    <td> 1 </td>
    <td> cc , however, a ground with only "cc" will fall apart </td> 
    <td><a href="../documents/counting/c..c_length2.txt" download>results</a></td></tr>
  
  <tr><td> 3 </td>
    <td> 2 </td>
    <td> 2 </td>
    <td> 1 </td>
    <td> CTC, CRC </td>  
    <td><a href="../documents/counting/c..c_length3.txt" download>results</a></td></tr>      
    
  <tr><td> 4 </td>
    <td> 5 </td>
    <td> 3 </td>
    <td> 1 </td>
    <td> cctc , ccrc , CTTC , CTRC , CRRC </td>
    <td><a href="../documents/counting/c..c_length4.txt" download>results</a></td></tr> 
  
  <tr><td> 5 </td>
    <td> 13 </td>
    <td> 8 </td>  
    <td> 3 </td>
    <td> cctcc , ccrcc , ccttc , cctrc , ccrrc , CTCTC , CTCRC , CRCRC , CRCLC , CTTTC , CTTRC , CTRRC , CRRRC </td>
    <td><a href="../documents/counting/c..c_length5.txt" download>results</a></td></tr>         
 
  <tr><td> 6 </td>
    <td> 24 </td>
    <td> 8 </td>
    <td> 2 </td>
    <td> cctctc , cctcrc , ccrctc , ccrcrc , ccrclc , ccttcc , cctrcc , ccrrcc , cctttc , ccttrc , cctrrc , ccrrrc , ctcctc , ctccrc , crccrc , crcclc , CTCTTC , CTCTRC , CTCRRC , CRCRRC , CRCLLC , CTTCRC , CTRCRC , CTRCLC </td>
    <td><a href="../documents/counting/c..c_length6.txt" download>results</a></td></tr>
  
  <tr><td> 7 </td>
    <td> 67 </td>
    <td> 30 </td>
    <td> 4 </td>
    <td></td>
    <td><a href="../documents/counting/c..c_length7.txt" download>results</a></td></tr>     
  
  <tr><td> 8 </td>
    <td> 168 </td>
    <td> 57 </td>
    <td> 3 </td>
    <td></td>
    <td><a href="../documents/counting/c..c_length8.txt" download>results</a></td></tr>     
  
  <tr><td> 9 </td>
    <td> 460 </td>
    <td> 157 </td>
    <td> 7 </td>
    <td></td>
    <td><a href="../documents/counting/c..c_length9.txt" download>results</a></td></tr>     
  
  <tr><td> 10 </td>
    <td> 1220 </td>
    <td> 334 </td>
    <td> 6 </td>
    <td></td>
    <td><a href="../documents/counting/c..c_length10.txt" download>results</a></td></tr>  
  
  <tr><td> 11 </td>
    <td> 3389 </td>
    <td> 874 </td>
    <td> 13 </td>
    <td></td>
    <td><a href="../documents/counting/c..c_length11.txt" download>results</a></td></tr>  
  
  <tr><td> 12 </td>
    <td> 9245 </td>
    <td> 2040 </td>
    <td> 10 </td>
    <td></td>
    <td><a href="../documents/counting/c..c_length12.txt" download>results</a></td></tr>  
  
  <tr><td> 13 </td>
    <td> 25677 </td>
    <td> 12498 </td>
    <td> 22 </td>
    <td></td>
    <td><a href="../documents/counting/c..c_length13.txt" download>results</a></td></tr>   

</table>
 
### Twists between stitches

Between every two stitches, zero, one or more twists can be made. Examples:
* CRC : CRCT , CRCR , CRCL , CRCTT , CRCTR , CRCTL , CRCRR , CRCLL , CRCTTT , CRCTTR , CRCTRR , CRCRRR , ...
* CTCTC : CTCTCT , CTCTCR , CTCTCTT , CTCTCTR , CTCTCRR , CTCTCTTT , CTCTCTTR , CTCTCTRR , CTCTCRRR , ...         
 
## Method used

### Observations from real lace

1. Twists before the first cross or after the last cross are viewed as actions that occur between stitches and can be done either before the stitch or after the stitch.
2. <span class="stch">Cross only</span> is a valid stitch. However, a lacework with only crosses and no twists at all does not hold together. <span class="stch">Cross only</span> can only be used in combination with other stitches.
3. Twist left followed by twist right is the same as twist right followed by twist left. This is also the same as twisting both pairs, i.e.: LR = RL = T.
4. Twisting both left and right pairs is treated as one action because the left and right sides are done in parallel by the lacemaker.
5. Different placing of pins can change the appearance of the ground. Pins are not considered in our lists and counting.   

### Rules for counting and cataloguing words representing stitches     

1. Every word must start with a “C”.
2. Every word must end with a "C". 
3. Every word of length greater than two must contain at least one symbol of the set { T , R , L }.    
4. For a consecutive sequence of the symbols { T , R , L } in a word, if the sequence contains an “R”, it cannot contain an “L”. Similarly, if the sequence contains an “L”, it cannot contain an “R”.
5. For a consecutive sequence of the symbols { T , R , L }, the sequence must be arranged in least lexicographical order: “T” &lt; “R” &lt; “L”. (This gives a canonical form. Lexicographical order, which is like alphabetical order, puts all of the symbols in a consistent order so that strings like rtrr, rrtr, trrr and rrtr, when sorted, are all the same, i.e. trrr.)
6. A word (represented by "b") and its mirrored versions ("d", "p" and "q") are treated as equivalent and only counted once. The canonical form of the word is the lexicographically least variant of its b, d, p and q forms. For example, the words ccrclc , cclcrc , crclcc, and clcrcc are all related by mirror reflections so they count as one unique word which is represented in our list by the canonical form ccrclc. Consequence: in the canonical form, the first occurrence of a symbol from { R , L } must be an "R".      

### Limitations

1. We consider words up to a maximal length of 13 symbols.
2. The number of consecutive symbols from { C } in a word is limited to two.
3. The number of consecutive symbols from { T , R , L } in a word is limited to three.

### How to make mirrored words  

#### Mirrored representation: b &hArr; d, p &hArr; q
    
a. Replace all "R" in the word with "L" and all "L" with "R"               

> CTRCTLC &rArr; CTLCTRC 
  
#### Mirrored representation: b &hArr; p, d &hArr; q     

a. Read word backwards       
b. Re-order twist groups: T &lt; R &lt; L          

> CTRCTLC &rArr; CLTCRTC &rArr; CTLCTRC    

#### How to make the quartet of words  

a. Apply mirror b &rArr; d                       
b. Apply mirror d &rArr; q       
c. Apply mirror q &rArr; p                   

> CTRCLC , CTLCRC , CLCTRC , CRCTLC   

#### Internal symmetry

The mirrored representations of word b and d are identical if b has no left or right twist actions (only “T”, no “R” and no “L”).              
The mirrored representations of word b and p are identical if b is a palindrome.           
All mirrored representations d, q and p of word b are identical if b has no left or right twist and is a palindrome.            

## Listing and counting

In this section we describe how we have listed and counted the words.     
We have chosen to list and count the words based on the length of the word, which also corresponds to the number of actions performed by the lacemaker.    
As examples we use words of length 6 (but not the complete set).     

### Notations and short notations

Let A = { a , b , c }; B = { p , q , r }  
1. &#1D4D0; &otimes; &#1D4D1; = { a , b , c } &otimes; { p , q , r }. This means: make all combinations using all the symbols in the first set and combine them with all the symbols in the second set. This gives a new set: { ap , aq , ar , bp , bq , br , cp , cq , cr }. A word is one of these combinations. Please note: do not change the order. In this example, “ra” is not a valid word.       
2. Short notation: &#1D4D0;&#1D4D1; means: &#1D4D0; &otimes; &#1D4D1; p&#1D4D0 means: { p } &otimes; &#1D4D0 (result: { pa , pb , pc }).   

### Defining sets
n : the length of the words we are counting     
C<sub>all</sub> = { c , cc }     

T<sub>1</sub> = { t , r , l }     
T<sub>2</sub> = { tt , tr , tl , rr , ll }     
T<sub>3</sub> = { ttt , ttr , ttl , trr , tll , rrr , lll }    
Please note: T<sub>3</sub> = tT<sub>2</sub> &cup; { rrr , lll }    
T<sub>all</sub> = T<sub>1</sub> &cup; T<sub>2</sub> &cup; T<sub>3</sub>    

To apply rule 6, we add extra base sets that do not include l's or series of only t's.     
B<sub>1</sub> = { r }			  
B<sub>2</sub> = { tr , rr } 		   
B<sub>3</sub> = { ttr , trr , rrr }		       

### Word forming

A word is a formed by choosing symbols alternately from C<sub>all</sub> and T<sub>all</sub>, ending with a symbol from C<sub>all</sub>. Valid words before applying rule 6 are elements from sets like:     
C<sub>all</sub> &otimes; T<sub>all</sub> &otimes; C<sub>all</sub>           
C<sub>all</sub> &otimes; T<sub>all</sub> &otimes; C<sub>all</sub> &otimes; T<sub>all</sub> &otimes; C<sub>all</sub>       

For the examples we use n = 6.

#### Step 1: Make basic set with proto-words

a. List all number 1, 2, ..., 2<sup>(n-2)</sup>        

> 1, 2, ... , 16           

b. Replace all numbers with their binary representation, length (n - 2)          

> 0001, 0010, ... , 1111     
  
c. Place "0" on front and back of each word    
  
> 000010, 000100, ... , 011110  

d. Replace all "0" with "c", all "1" with "T<sub>1</sub>"             

> ccccT<sub>1</sub>c , cccT<sub>1</sub>cc , ... , cT<sub>1</sub>T<sub>1</sub>T<sub>1</sub>T<sub>1</sub>c         
  
e. Remove all words with more than two consecutive "c". Remove all words with more than three consecutive "T<sub>1</sub>"    

> ... , ccT<sub>1</sub>T<sub>1</sub>T<sub>1</sub>c , cT<sub>1</sub>ccT<sub>1</sub>c , cT<sub>1</sub>cT<sub>1</sub>T<sub>1</sub>c , cT<sub>1</sub>T<sub>1</sub>cT<sub>1</sub>c  , ...                  

#### Step 2: Avoid words b where b = d  

For examples we use the following proto-words: ccT<sub>1</sub>T<sub>1</sub>T<sub>1</sub>c , cT<sub>1</sub>ccT<sub>1</sub>c , cT<sub>1</sub>cT<sub>1</sub>T<sub>1</sub>c , cT<sub>1</sub>T<sub>1</sub>cT<sub>1</sub>c    

a. First make words with all "t"                    
b. Replace T<sub>1</sub> with D<sub>i</sub> in proto-word set (to be specified later)                

> cctttc , ccD<sub>3</sub>c     
> ctcctc , cD<sub>1</sub>ccD<sub>1</sub>c   
> ctcttc , cD<sub>1</sub>cD<sub>2</sub>c   
> cttctc , cD<sub>2</sub>cD<sub>1</sub>c 
           
c. Only one of the D-sets in the proto-word is the set with the first "r" in the word. Call this set "B", leading to more proto-words    

> cctttc , ccB<sub>3</sub>c     
> ctcctc , cB<sub>1</sub>ccD<sub>1</sub>c , cD<sub>1</sub>ccB<sub>1</sub>c     
> ctcttc , cB<sub>1</sub>cD<sub>2</sub>c , cD<sub>1</sub>cB<sub>2</sub>c     
> cttctc , cB<sub>2</sub>cD<sub>1</sub>c , cD<sub>2</sub>cB<sub>1</sub>c     
          
d. All D before a B must be all t's. Replace with t      
e. No limits for D after B. Replace with T<sub>i</sub>.     

> cctttc , ccB<sub>3</sub>c     
> ctcctc , cB<sub>1</sub>ccT<sub>1</sub>c , ctccB<sub>1</sub>c     
> ctcttc , cB<sub>1</sub>cT<sub>2</sub>c , ctcB<sub>2</sub>c     
> cttctc , cB<sub>2</sub>cT<sub>1</sub>c , cttcB<sub>1</sub>c        

f. Solve T and B, giving the words we are looking for     

> cctttc , ccttrc , cctrrc , ccrrrc     
> ctcctc , crcctc , crccrc , crcclc , ctccrc   
> ctcttc , crcttc , crctrc , crctlc , crcrrc , crcllc , ctctrc , ctcrrc   
> cttctc , ctrctc , ctrcrc , ctrclc , crrctc , crrcrc , crrclc , cttcrc   

g. If a word contains "cc", write in lowercase. If a word does not contain "cc", write in captitals.

> cctttc , ccttrc , cctrrc , ccrrrc     
> ctcctc , crcctc , crccrc , crcclc , ctccrc   
> CTCTTC , CRCTTC , CRCTRC , CRCTLC , CRCRRC , CRCLLC , CTCTRC , CTCRRC   
> CTTCTC , CTRCTC , CTRCRC , CTRCLC , CRRCTC , CRRCRC , CRRCLC , CTTCRC

#### Step 3: Finding words b where b = p

a. For each word b found in step 2, make a quartet of words (see above)    

> b = CRCTLC , p = CTLCRC , d = CLCTRC , q = CTRCLC       

b. Keep the lexicographycally lowest word     

> b = CRCTLC , p = CTLCRC , d = CLCTRC , q = <u>CTRCLC</u>. Word CTRCLC (q) is the lowest, and is kept.      

#### Step 4: check for doubles    

Typically, the doubles are the words where p (quartet 1) = b (quartet 2) or q (quartet 1) = b (quartet 2). Please note, the consequence of rule 6 is that d (quartet 1) &ne; b (quartet 2).       

***
[&uArr;]()
