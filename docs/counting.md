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

A stitch is made by crossing and twisting two pairs of bobbins. With “twist” we mean: twist both pairs, twist right pair, or twist left pair. We can abbreviate this with "c" (cross), "t" (twist both pairs), "r" (twist right pair) and "l" (twist left pair).    

A stitch can be described with a <u>word</u> formed with the symbols "c", "l", "r", "t". These words have to obey certain rules. These rules come from observations from actual lace, and from some limits we set ourselves in this document.    
To help us count and catalogue the stitches, the symbols are ordered: "c" before "t", "t" before "r", "r" before "l". (We have chosen this order because tr is easier to see than tl.)     

<span class="b-red">Please note</span>: the following rules are to be applied only for counting and cataloguing. Typically to make a diagonal net with only one stitch. Stitches like <span class="stch">lcltrcccl</span> are perfectly valid in real lace. 

## Results

<table class="cctt">
  <tr><th><strong>Length of word</strong></th>
      <th><strong>number of results</strong></th>
      <th><strong>results</strong></th>
  </tr>
 
  <tr><td> 1 </td><td>     1 </td><td> c, however, cross only can not stand alone </td></tr>
  <tr><td> 2 </td><td>     3 </td><td> cc , ct , cr , however, cc can not stand alone </td></tr>
  <tr><td>  3 </td><td>    7 </td><td> cct , ccr , ctc, crc , ctt , ctr , crr </td></tr>      
  <tr><td>  4 </td><td>   16 </td><td> cctc , ccrc , cctt  , cctr , ccrr , ctct , ctcr , crct , crcr , cttc , ctrc , crrc , cttt , cttr , ctrr , crrr </td></tr> 
  <tr><td>  5 </td><td>   34 </td><td> cctcc , ccrcc , cctct , cctcr , ccrct , ccrcr , ccrcl , ccttc , cctrc , ccrrc , ccttt , ccttr , cctrr , ccrrr , ctctc , ctcrc , crcrc , crclc , ctctt , ctctr , ctcrr , crctt , crctr , crcrr , cttct , cttcr , ctrct , ctrcr , crrct , crrcr , ctttc , cttrc , ctrrc , crrrc </td></tr>         
  <tr><td>  6 </td><td>   79 </td><td> cctcct , cctccr , ccrcct , ccrccr , cctctc , cctcrc , ccrctc , ccrcrc , ccrclc , cctctt , cctctr , cctcrr , ccrctt , ccrctr , ccrctl , ccrcrr , ccrcll , ccttcc , cctrcc , ccrrcc , ccttct , ccttcr , cctrct , cctrcr , cctrcl , ccrrct , ccrrcr , ccrrcl , cctttc , ccttrc , cctrrc , ccrrrc , ctcctc , ctccrc , crccrc , crcclc , ctctct , ctctcr , ctcrct , ctcrcr , ctcrcl , crcrct , crcrcr , crclct , crclcr , crclcl , ctcttc , ctctrc , ctcrrc , crcrrc , crcllc , ctcttt , ctcttr , ctctrr , ctcrrr , crcttt , crcttr , crctrr , crcrrr , cttcrc , ctrcrc , ctrclc , cttctt , cttctr , cttcrr , ctrctt , ctrctr , ctrcrr , crrctt , crrctr , crrcrr , ctttct , ctttcr , cttrct , cttrcr , ctrrct , ctrrcr , crrrct , crrrcr  </td></tr>
  <tr><td>  7 </td><td>  200 </td><td> </td></tr>     
  <tr><td>  8 </td><td>  500 </td><td> result estimated </td></tr>     
  <tr><td>  9 </td><td> 1.250 </td><td> result estimated </td></tr>     
  <tr><td> 10 </td><td> 3.150 </td><td> result estimated </td></tr>  

</table>
                                                  
## Method used

### Observations from real lace

1. A stitch without a cross is in fact two different “stitches”. The twists can be done at the end of the previous stitches.
2. If a stitch starts with a twist, we can apply this twist at the end of the previous stitches, with the same result.
3. An incoming right twist is the same as an outgoing left twist for a net with only one stitch.
4. <span class="stch">Cross only</span> is a valid stitch. However, a lacework with only crosses and no twists at all does not hold together. <span class="stch">Cross only</span> can only be used in combination with other stitches.
5. Twist left followed by twist right is the same as twist right followed by twist left, this is the same as twist both pairs. Short: lr = rl = t.
6. A twist left and right is treated as one action because the left and right sides are done in parallel by the lacemaker.
7. Stitches with many actions can be viewed as varieties of plaits and tallies.
8. Stitches can end with crosses or end with twists.
9. Stitches can be “mirrored” vertically by switching right and left twists. Stitches can be “mirrored” horizontally by applying the twists and crosses backwards. Please note: this is not a real mirror. A real mirror changes which thread lies on top. Please note: viewing a stitch upside down is viewing the stitch mirrored vertically and horizontally.

### Pins

Pins can be put anywhere between the two pairs of the stitch: <span class="stch">ctPctctct</span>, <span class="stch">ctctPctct</span>, <span class="stch"> ctctPct</span>, <span class="stch">ctctctP</span>. Also, we can make a pinchain: <span class="stch">ctPctctPct</span> and even put the pin between bobbin 1 and 2. Although the placing of the pin can change the appearance of the ground, we do not consider pins in our counting.   

### Rules for counting and cataloguing stitch words

1. Every word must start with a “c”.
2. Every word must contain at least one symbol of the set { t, r, l }.
3. For a consecutive sequence of the symbols { t, r, l } in a word, if the sequence contains an “r”, it cannot contain an “l”. Similarly, if the sequence contains an “l”, it cannot contain an “r”.
4. For a consecutive sequence of the symbols { t, r, l }, the sequence must be arranged in least lexicographical order: “t” &lt; “r” &lt; “l”. (This gives a canonical form. Lexicographical order, which is like alphabetical order, puts all of the symbols in a consistent order so that strings like rtrr, rrtr, trrr and rrtr, when sorted, are all the same, i.e. trrr.)
5. Vertical mirrors. In the word, the first occurrence of a symbol from { r, l } must be an “r”.
6. Horizontal mirrors. We have not yet discovered a general rule for words that mirror each other horizontally. The search has done by listing all “quartets”. Keep the word with the least lexicographic representation. 

### Quartets of words: bdqp

Word p is vertically mirrored in word q, q is horizontally mirrored in d; d is vertically mirrored in b; b is horizontally mirrored in p. In our catalogue, we only list the word with the least lexicographic representation. Some words, like ctct are there own when vertically or horizontally mirrored image.     
Please note: in this quartet, the mirrored words follow the rules set above, so all words start with "c".          
Examples: { ccrclc , cclcrc , crclcc, clcrcc }; { ctct }

### Limitations

1. We consider words up to a maximal length of 10 symbols.
2. The number of consecutive symbols from { c } in a word is limited to 2.
3. The number of consecutive symbols from { t, r, l } in a word is limited to 3.

## Listing and counting stitches

In this section we describe how we have listed and counted the words.     
We have chosen to list and count the words based on the length of the word, which also corresponds to the number of actions performed by the lacemaker.    
As examples we use some words of length 5.   

### Notations and short notations

Let A = { a , b , c }; B = { p , q , r }  
1. A &otimes; B = { a , b , c } &otimes; { p , q , r }. This means: make all combinations with all the symbols in the first set with all the symbols in the second set. This gives a new set: { ap , aq , ar , bp , bq , br , cp , cq , cr }. A word is one of these combinations. Please note: do not change the order. In this example, “pa” is not a valid combination.     
2. Short notation: AB means: A &otimes; B; pA means: { p } &otimes; A (result: { pa , pb , pc }   

### Defining sets
n : the length of the words we are counting     
C = { c , cc }     
T = { t , r , l }

T<sub>1</sub> = { t , r , l }     
T<sub>2</sub> = { tt , tr , tl , rr , ll }     
T<sub>3</sub> = { ttt , ttr , ttl , trr , tll , rrr , lll }    
Please note: T<sub>3</sub> = tT<sub>2</sub> &cup; { rrr , lll }    
T<sub>all</sub> = T<sub>1</sub> &cup; T<sub>2</sub> &cup; T<sub>3</sub>    

A word is a formed by choosing symbols alternately from C and T<sub>all</sub>. Valid words before applying rule 5 are elements from sets like:     
C &otimes; T<sub>all</sub> &otimes; C           
C &otimes; T<sub>all</sub> &otimes; C &otimes; T<sub>all</sub> &otimes; C &otimes; T<sub>all</sub>

To apply rule 5 (vertical mirrors), we add extra base sets that do not include l's or series of t's.     
B<sub>1</sub> = { r }			  
B<sub>2</sub> = { tr , rr } 		   
B<sub>3</sub> = { ttr , trr , rrr }		       

To apply rule 6 (horizontal mirrors): We have not yet found an easy way of applying this rule other than deleting double words.     

### Word forming

For example we use n = 5.

#### Step 1: Make basic set with proto-words, applying rule 1, 2, 3 and 4

a. List all numbers 1, 2, ..., (2<sup>n-1</sup> - 1). Larger numbers will lead to words not starting with "c".      

> 1, 2, ... , 15           

b. Replace all numbers with their binary representation, length n.           

> 00001, 00010, ... , 01111            

c. Replace all "0" with "c", all "1" with "T".     

> ccccT , cccTc , ..., cTTTT           
  
d. Remove all words with more than 2 "c". Remove all words with more than 3 "T".    

> ccTcc , ccTcT , ... , cTTTc         

#### Step 2: Avoid vertical mirrored words, applying rule 5

For examples we use the following proto-words: ccTcc , ccTcT , cTTcT , cTccT    

a. First make words with all "t".                
b. Replace T with T'<sub>i</sub> in proto-word set (to be specified later).              

> cctcc , ccT'<sub>1</sub>cc    
> cctct , ccT'<sub>1</sub>cT'<sub>1</sub>   
> cttct , cT'<sub>2</sub>cT'<sub>1</sub>    
> ctcct , cT'<sub>1</sub>ccT'<sub>1</sub>              

c. Only one of the T'-sets is the set with the first "r" in the word (rule 5). Call this set "B", leading to more proto-words.

> cctcc , ccB<sub>1</sub>cc          
> cctct , ccT’cB<sub>1</sub> , ccB<sub>1</sub>cT’      
> cttct , cT’<sub>2</sub>cB<sub>1</sub> , cB<sub>2</sub>cT’        
> ctcct , cT’ccB<sub>1</sub> , cB<sub>1</sub>ccT’          

d. All T' before a B must be all t's (rule 5). Replace with t.     
e. No limits for T' after B. Replace with T<sub>i</sub>.     

> cctcc , ccB<sub>1</sub>cc     
> cctct , cctcB<sub>1</sub> , ccB<sub>1</sub>cT<sub>1</sub>    
> cttct , cttcB<sub>1</sub> , cB<sub>2</sub>cT<sub>1</sub>   
> ctcct , ctccB<sub>1</sub> , cB<sub>1</sub>ccT<sub>1</sub>    

f. Solve T and B, giving the words we were looking for.     

> cctcc , ccrcc         
> cctct , cctcr , ccrct , ccrcr , ccrcl   
> cttct , cttcr , ctrct , ctrcr , ctrcl , crrct , crrcr , crrcl       
> ctcct , ctccr , crcct , crccr , crccl      

#### Step 3 : Finding horizontal mirror pairs, applying rule 6

a. For each word b found in step 2, make a quartet of words:   

> b = ctrcl , p = ctrcr , d = ctlcr , q = ctlcl   

b. Check for doubles in this new set of words, and keep the lexicographycally lowest word. Typically, the doubles are the words where p = b or q = b. Because of rule 5: d &NotEqual; b.    

> b = ctrcl , p = ctrcr , q = ctlcl , d = ctlcr. Word ctrcr (p) is the lowest.      

#### Making of a vertical mirrored word 
    
a. replace all "r" in the word with "l" and all "l" with "r".               

> ctrctl &rArr; ctrlctr 

#### Making of a horizontal mirrored word, applying rule 1 and using observations 2 and 3    
Please note: in a real lace work, the horizontal mirrored stitch involves only "reading backwards".

a. Read word backwards.       
b. Re-order twist groups: t &lt; r &lt; l.          
c. Move twists in front to back, replacing l with r, r with l (observation 3).       

> ctrctl &rArr; ltcrtc &rArr; tlctrc &rArr; ctrctr   

#### Making a quartet of words  

a. Apply vertical mirror.                       
b. Apply horizontal mirror on both results from step a).                    

> ctrctl , ctrctr , ctlctl , ctlctr




***
[&uArr;]()
