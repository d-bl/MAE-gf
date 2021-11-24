---
layout: default
title: counting
---

# Listing & counting stitches

## Contents

* [Introduction](#introduction)
* [Results](#results)
* [Method used](#method-used)
* [Listing and counting stitches](#listing-and-counting-stitches)

## Introduction

A stitch is made by crossing and twisting two pairs of bobbins. With “twist” we mean: twist both pairs, twist right pair, or twist left pair. We can abbreviate this with "c" (cross), "t" (twist both pairs), "r" (twist right pair) and "l" (twist left pair). For listing and counting stitches we consider stitches that start and end with crosses. Twists before and after are viewed as that what is happening between stitches.        

A stitch can be described with a <u>word</u> formed with the symbols "c", "l", "r", "t". These words have to obey certain rules. These rules come from observations from actual lace, and from some limits we set ourselves in this document.    
To help us count and catalogue the stitches, the symbols are ordered: "c" before "t", "t" before "r", "r" before "l". (We have chosen this order because tr is easier to see than tl.)     

<span class="b-red">Please note</span>: the following rules are to be applied for counting and cataloguing only. Typically to make a diagonal net with only one stitch. Stitches like <span class="stch">lcltrcccl</span> are perfectly valid in real lace. 

## Results

The list with stitches can be downloaded as .txt file. Click op "results" in the table below. On each row in the file you find: _stitch word "b" following the rules set below and between brackets the "quartet" of mirrored stitches. See below for an explanation. **TO BE SPECIFIED**_

Please note: the following list consists of words starting and ending with "c". Between two stitches 0, 1 or more twists ("t", "r", "l") can be applyed. 

<table class="cctt">
  <tr><th>Length of word</th>
    <th>counts</th>
    <th>counts without cc TO DO</th>
    <th>symmetric stitches (b=d=p=q)</th>
    <th>results</th>
    <th>download results</th>
  </tr>
 
  <tr><td> 1 </td>
    <td> 1 </td>
    <td> 1 </td>
    <td> 1 </td>
    <td> c , however, cross only can not stand alone </td> 
    <td></td></tr>
  
  <tr><td> 2 </td>
    <td> 1 </td>
    <td> 0 </td>
    <td> 1 </td>
    <td> cc , however, cc can not stand alone </td> 
    <td></td></tr>
  
  <tr><td> 3 </td>
    <td> 2 </td>
    <td> 0 </td>
    <td> 1 </td>
    <td> ctc, crc </td>  
    <td><a href="../documents/counting/c_clengthto10.txt" download>results</a></td></tr>      
    
  <tr><td> 4 </td>
    <td> 5 </td>
    <td> 3 </td>
    <td> 1 </td>
    <td> cctc , ccrc , cttc , ctrc , crrc </td>
    <td><a href="../documents/counting/c_clengthto10.txt" download>results</a></td></tr> 
  
  <tr><td> 5 </td>
    <td> 13 </td>
    <td> 8 </td>  
    <td> 3 </td>
    <td> cctcc , ccrcc , ccttc , cctrc , ccrrc , ctctc , ctcrc , crcrc , crclc , ctttc , cttrc , ctrrc , crrrc </td>
    <td><a href="../documents/counting/c_clengthto10.txt" download>results</a></td></tr>         
 
  <tr><td> 6 </td>
    <td> 24 </td>
    <td> 8 TODO </td>
    <td> 2 </td>
    <td> cctctc , cctcrc , ccrctc , ccrcrc , ccrclc , ccttcc , cctrcc , ccrrcc , cctttc , ccttrc , cctrrc , ccrrrc , ctcctc , ctccrc , crccrc , crcclc , ctcttc , ctctrc , ctcrrc , crcrrc , crcllc , cttcrc , ctrcrc , ctrclc </td>
    <td><a href="../documents/counting/c_clengthto10.txt" download>results</a></td></tr>
  
  <tr><td> 7 </td>
    <td> 67 </td>
    <td> TOTDO </td>
    <td> 4 </td>
    <td></td>
    <td><a href="../documents/counting/c_clengthto10.txt" download>results</a></td></tr>     
  
  <tr><td> 8 </td>
    <td> 168 </td>
    <td> TODO </td>
    <td> 3 </td>
    <td></td>
    <td><a href="../documents/counting/c_clengthto10.txt" download>results</a></td></tr>     
  
  <tr><td> 9 </td>
    <td> 460 </td>
    <td> TODO </td>
    <td> 7 </td>
    <td></td>
    <td><a href="../documents/counting/c_clengthto10.txt" download>results</a></td></tr>     
  
  <tr><td> 10 </td>
    <td> 1220 </td>
    <td> TODO </td>
    <td> 6 </td>
    <td></td>
    <td><a href="../documents/counting/c_clengthto10.txt" download>results</a></td></tr>  
  
  <tr><td> 11 </td>
    <td> 3389 </td>
    <td> TODO </td>
    <td> 13 </td>
    <td></td>
    <td><a href="../documents/counting/c_clength11.txt" download>results</a></td></tr>  
  
  <tr><td> 12 </td>
    <td> 9245 </td>
    <td> TODO </td>
    <td> 10 </td>
    <td></td>
    <td><a href="../documents/counting/c_clength12.txt" download>results</a></td></tr>  
  
  <tr><td> 13 </td>
    <td> 25677 </td>
    <td> TODO </td>
    <td> 22 </td>
    <td><a href="../documents/counting/c_clength13.txt" download>results</a></td>
    <td></td></tr>   

</table>
                                                  
## Method used

### Observations from real lace

1. A stitch without a cross is in fact two different “stitches”. The twists can be done at the end of the previous stitches.
2. If a stitch starts with a twist, we can apply this twist at the end of the previous stitches, with the same result.
3. An incoming right twist is the same as an outgoing left twist for a diagonal net with only one stitch.
4. The twists at the start or at the end of a stitch can be viewed as that what is happening between two stitches.
5. <span class="stch">Cross only</span> is a valid stitch. However, a lacework with only crosses and no twists at all does not hold together. <span class="stch">Cross only</span> can only be used in combination with other stitches.
6. Twist left followed by twist right is the same as twist right followed by twist left. This is the same as twist both pairs. Short: lr = rl = t.
7. A twist left and right is treated as one action because the left and right sides are done in parallel by the lacemaker.
8. Stitches with many actions can be viewed as varieties of plaits and tallies.
9. Stitches can end with crosses or end with twists.
10. Stitches can be “mirrored” vertically by switching right and left twists. Stitches can be “mirrored” horizontally by applying the twists and crosses backwards. Please note: this is not a real mirror. A real mirror changes which thread lies on top. Please note: viewing a stitch upside down is viewing the stitch mirrored vertically and horizontally. Please note: in the actual lace the appearance of the "mirrored" stitch depends on the grid chosen, e.g. a diagonal grid or a horizontal grid.   

### Pins

Pins can be put anywhere between the two pairs of the stitch: <span class="stch">ctPctctc</span>, <span class="stch">ctctPctc</span>, <span class="stch"> ctctPc</span>, <span class="stch">ctctcP</span>. Also, we can make a pinchain: <span class="stch">ctPctctPc</span> and even put the pin between bobbin 1 and 2. Although the placing of the pin can change the appearance of the ground, we do not consider pins in our counting.   

### Rules for counting and cataloguing stitch words

1. Every word must start with a “c”.
2. Every word must contain at least one symbol of the set { t, r, l }.
3. For a consecutive sequence of the symbols { t, r, l } in a word, if the sequence contains an “r”, it cannot contain an “l”. Similarly, if the sequence contains an “l”, it cannot contain an “r”.
4. For a consecutive sequence of the symbols { t, r, l }, the sequence must be arranged in least lexicographical order: “t” &lt; “r” &lt; “l”. (This gives a canonical form. Lexicographical order, which is like alphabetical order, puts all of the symbols in a consistent order so that strings like rtrr, rrtr, trrr and rrtr, when sorted, are all the same, i.e. trrr.)
5. Observation 4 tells us, that we can write a stitch as starting and ending with "c", followed by 0 or more twists. For listing and counting we ingnore the twists between two stitches. 
6. Vertical mirrors. In the word, the first occurrence of a symbol from { r, l } must be an “r”.
7. Horizontal mirrors. We have not yet discovered a general rule for words that mirror each other horizontally. The search has done by listing all “quartets”. Keep the word with the least lexicographic representation. 

### Quartets of words: bdqp

Word p is vertically mirrored in word q, q is horizontally mirrored in d; d is vertically mirrored in b; b is horizontally mirrored in p. In our catalogue, we only list the word with the least lexicographic representation.      
Some words, like ctctc stay the same when vertically or horizontally mirrored.     
Please note: in this quartet, the mirrored words follow the rules set above, so all words start and end with "c".          
Examples: { ccrclc , cclcrc , crclcc, clcrcc }; { ctctc }   

A stitch (c..c) can only be its own vertical mirror (b = d) if it has no left and rights twitst actions (only "t", no "r" and no "l").       
A stitch (c..c) can only be its own horizontal mirror (b = p) if its a palindrome.    

### Limitations

1. We consider words up to a maximal length of 13 symbols.
2. The number of consecutive symbols from { c } in a word is limited to 2.
3. The number of consecutive symbols from { t, r, l } in a word is limited to 3.

## Listing and counting stitches

In this section we describe how we have listed and counted the words.     
We have chosen to list and count the words based on the length of the word, which also corresponds to the number of actions performed by the lacemaker.    
As examples we use words of length 5 (but not the complete set).     

### Notations and short notations

Let A = { a , b , c }; B = { p , q , r }  
1. A &otimes; B = { a , b , c } &otimes; { p , q , r }. This means: make all combinations using all the symbols in the first set and combine them with all the symbols in the second set. This gives a new set: { ap , aq , ar , bp , bq , br , cp , cq , cr }. A word is one of these combinations. Please note: do not change the order. In this example, “pa” is not a valid word.       
2. Short notation: AB means: A &otimes; B; pA means: { p } &otimes; A (result: { pa , pb , pc }).   

### Defining sets
n : the length of the words we are counting     
C = { c , cc }     
T = { t , r , l }

T<sub>1</sub> = { t , r , l }     
T<sub>2</sub> = { tt , tr , tl , rr , ll }     
T<sub>3</sub> = { ttt , ttr , ttl , trr , tll , rrr , lll }    
Please note: T<sub>3</sub> = tT<sub>2</sub> &cup; { rrr , lll }    
T<sub>all</sub> = T<sub>1</sub> &cup; T<sub>2</sub> &cup; T<sub>3</sub>    

A word is a formed by choosing symbols alternately from C and T<sub>all</sub>. Valid words before applying rule 6 are elements from sets like:     
C &otimes; T<sub>all</sub> &otimes; C           
C &otimes; T<sub>all</sub> &otimes; C &otimes; T<sub>all</sub> &otimes; C &otimes; T<sub>all</sub>

To apply rule 6 (vertical mirrors), we add extra base sets that do not include l's or series of t's.     
B<sub>1</sub> = { r }			  
B<sub>2</sub> = { tr , rr } 		   
B<sub>3</sub> = { ttr , trr , rrr }		       

To apply rule 7 (horizontal mirrors): We have not yet found an easy way of applying this rule other than deleting double words.     

### Word forming

For example we use n = 6.

#### Step 1: Make basic set with proto-words, applying rule 1, 2, 3, 4 and 5

a. List all numbers 1, 2, ..., (2<sup>n-1</sup> - 1). Larger numbers will lead to words not starting with "c".      

> 1, 2, ... , 31           

b. Replace all numbers with their binary representation, length n.           

> 000001, 000010, ... , 011111            

c. Replace all "0" with "c", all "1" with "T".        

> cccccT , ccccTc , ... , cTTTTT           
  
d. Remove all words with more than 2 "c". Remove all words with more than 3 "T".    

> ... , ccTTcc , cTTcTT , cTcTcc, cTcTcT, ... , cTTTcc , ...         

e. Remove all words that ends with T. Note, these are the odd numbers from step 1.

> ... , ccTTcc , cTcTcc , ... , cTTTcc , ...    

#### Step 2: Avoid vertical mirrored words, applying rule 6

For examples we use the following proto-words: ccTTTc , cTccTc , cTcTTc , cTTcTc    

a. First make words with all "t".                
b. Replace T with D<sub>i</sub> in proto-word set (to be specified later).              

> cctttc , ccD<sub>3</sub>c     
> ctcctc , cD<sub>1</sub>ccD<sub>1</sub>c   
> ctcttc , cD<sub>1</sub>cD<sub>2</sub>c   
> cttctc , cD<sub>2</sub>cD<sub>1</sub>c 
           
c. Only one of the D-sets in the proto-word is the set with the first "r" in the word (rule 6). Call this set "B", leading to more proto-words.

> cctttc , ccB<sub>3</sub>c     
> ctcctc , cB<sub>1</sub>ccD<sub>1</sub>c , cD<sub>1</sub>ccB<sub>1</sub>c     
> ctcttc , cB<sub>1</sub>cD<sub>2</sub>c , cD<sub>1</sub>cB<sub>2</sub>c     
> cttctc , cB<sub>2</sub>cD<sub>1</sub>c , cD<sub>2</sub>cB<sub>1</sub>c     
          
d. All D before a B must be all t's (rule 6). Replace with t.     
e. No limits for D after B. Replace with T<sub>i</sub>.     

> cctttc , ccB<sub>3</sub>c     
> ctcctc , cB<sub>1</sub>ccT<sub>1</sub>c , ctccB<sub>1</sub>c     
> ctcttc , cB<sub>1</sub>cT<sub>2</sub>c , ctcB<sub>2</sub>c     
> cttctc , cB<sub>2</sub>cT<sub>1</sub>c , cttcB<sub>1</sub>c        

f. Solve T and B, giving the words we were looking for.     

> cctttc , ccttrc , cctrrc , ccrrrc     
> ctcctc , crcctc , crccrc , crcclc , ctccrc   
> ctcttc , crcttc , crctrc , crctlc , crcrrc , crcllc , ctctrc , ctcrrc   
> cttctc , ctrctc , ctrcrc , ctrclc , crrctc , crrcrc , crrclc , cttcrc

#### Step 3 : Finding horizontal mirror pairs, applying rule 7

a. For each word b found in step 2, make a quartet of words (see below):   

> b = crctlc , p = ctlcrc , d = clctrc , q = ctrclc       

b. Keep the lexicographycally lowest word. Check for doubles. Typically, the doubles are the words where p (quartet 1) = b (quartet 2) or q (quartet 1) = b (quartet 2). Because of rule 6: d (quartet 1) &ne; b (quartet 2).    

  > b = crctlc , p = ctlcrc , d = clctrc , q = <u>ctrclc</u>. Word ctrclc (q) is the lowest, and is kept.      

#### Making of a vertical mirrored word 
    
a. replace all "r" in the word with "l" and all "l" with "r".               

> ctrctlc &rArr; ctrlctrc 

#### Making of a horizontal mirrored word, applying rule 1 and using observations 2, 3 and 4    
Please note: in a real lace work, the horizontal mirrored stitch involves only "perform backwards".

a. Read word backwards.       
b. Re-order twist groups: t &lt; r &lt; l.          

> ctrctlc &rArr; cltcrtc &rArr; ctlctrc    

#### Making quartet of words  

a. Apply vertical mirror.                       
b. Apply horizontal mirror on both the original stitch and the result from step a).                    

> ctrclc , ctlcrc , clctrc , crctlc   

***
[&uArr;]()
