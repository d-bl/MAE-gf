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

A stitch is made by crossing and twisting two pairs of bobbins. With “twist” we mean: twist both pairs, twist right pair, or twist left pair. We can abbreviate this by c (cross), t (twist both pairs), r (twist right pair) and l (twist left pair).    

A stitch can be described with a word formed with the symbols c, l, r, t. These words have to obey certain rules. These rules come from observations from actual lace, and from some limits we set ourselves in this document.    
To help us count and catalogue the stitches, the symbols are ordered: c before t, t before r, r before l. (We have chosen this order because tr is easier to see than tl.)     

<span class="b-red">Please note</span>: the following rules are to be applied only for counting and cataloguing. Typically to make a diagnoal net with only one stitch. Stitches like <span class="stch">lcltrcccl</span> are perfectly valid in real lace. 

## Results

Words with length:

1. 1 result: c however, cross only can not stand alone     
2. 3 results: cc , ct, cr	however, cc can not stand alone       
3. 7 results: cct , ccr , ctc, crc , ctt , ctr , crr      
4. 16 results: cctc , ccrc , cctt  , cctr , ccrr , ctct , ctcr , crct , crcr , cttc , ctrc , crrc , cttt , cttr , ctrr , crrr     
5. 34 results: cctcc , ccrcc , cctct , cctcr , ccrct , ccrcr , ccrcl , ccttc , cctrc , ccrrc , ccttt , ccttr , cctrr , ccrrr , ctctc , ctcrc , crcrc , crclc , ctctt , ctctr , ctcrr , crctt , crctr , crcrr , cttct , cttcr , ctrct , ctrcr , crrct , crrcr , ctttc , cttrc , ctrrc , crrrc      
6. 79 results   
7.   follows
8.   follows
9.   follows
10.   follows 

## Method used

### Observations from real lace

1. A stitch without a cross is in fact two different “stitches”. The twists can be done at the end of the previous stitches.
2. If a stitch starts with a twist, we can apply this twist at the end of the previous stitches, with the same result.
3. An incoming right twist is the same as an outgoing left twist for a net with only one stitch.
4. <span class="stch">Cross only</span> is a valid stitch. However, a lacework with only crosses and no twists at all does not hold together. <span class="stch">Cross only</span> can only be used in combination with other stitches.
5. Twist left followed by twist right is the same as twist right followed by twist left, this is the same as twist both pairs. Short: lr = rl = t.
6. Twist is treated as one action because the left and right sides are done in parallel by the lacemaker.
7. Stitches with many actions can be viewed as varieties of plaits and tallies.
8. Stitches can end “open”: meaning, they end with a cross. Stitches can end "closed": meaning, they end with a twist.
9. Stitches can be “mirrored” vertically by switching right and left twists. Stitches can be “mirrored” horizontally by applying the twists and crosses backwards. Please note: this is not a real mirror. A real mirror changes which thread lies on top. Please note: viewing a stitch upside down is viewing the stitch mirrored vertically and horizontally.

### Pins

Pins can be put “at any time” between the two pairs of the stitch: <span class="stch">ctPctctct</span>, <span class="stch">ctctPctct</span>, <span class="stch"> ctctPct</span>, <span class="stch">ctctctP</span>. Also, we can make a pinchain: <span class="stch">ctPctctPct</span> and even put the pin between bobbin 1 and 2. Although the placing of the pin can change the appearance of the ground, we do not consider pins in our counting.   

### Notations and short notations

Let A = { a , b , c }; B = { p , q , r }  
1. A &otimes; B = { a , b , c } &otimes; { p , q , r }. This means: make all combinations with all the symbols in the first set with all the symbols in the second set. This gives a new set: { ap , aq , ar , bp , bq , br , cp , cq , cr }. A word is one of these combinations. Please note: do not change the order. In this example, “pa” is not a word.   
2. Short notation: AB means: A &otimes; B; pA means: { p } &otimes; A (result: { pa , pb , pc }   

### Rules for counting and cataloguing stitch words

1. Every word must start with a “c”.
2. Every word must contain at least one of the set { t, r, l }.
3. For a consecutive sequence of the symbols { t, r, l } in a word, if the sequence contains an “r”, it cannot contain an “l”. Similarly, if the sequence contains an “l”, it cannot contain an “r”.
4. For a consecutive sequence of the symbols { t, r, l }, the sequence must be arranged in least lexicographical order: “t” < “r” < “l”. (This gives a canonical form. Lexicographical order, which is like alphabetical order, puts all of the symbols in a consistent order so that strings like rtrr, rrtr, trrr and rrtr, when sorted, are all the same, i.e. trrr.)
5. Vertical mirrors. In the word, the first occurrence of a symbol from { r, l } must be an “r”.
6. Horizontal mirrors. We have not yet discovered a general rule for words that mirror each other horizontally. The search has done by listing all “quartets”. Keep the word with the least lexicographic representation. 

### Quartets of words

In our catalogue, we only list the word with the least lexicographic representation. Some words, like ctct gives themselves when vertically or horizontally mirrored.     
Word p is vertically mirrored in word q, q is horizontally mirrored in d; d is vertically mirrored in b; b is horizontally mirrored in p.      
Examples: { ccrclc , cclcrc , crclcc, clcrcc }; { ctct }

### Limitations

1. We consider words up to a maximal length of 10 symbols.
2. The number of consecutive “c”’s in a word is limited to 2.
3. The number of consecutive symbols from { t, r, l } is limited to 3.

## Listing and counting stitches

We have chosen to list and count the words based on the length of the word which also corresponds to the number of actions performed by the lacemaker.    
We will use as example some words of length 5. For other lengths, we only give results.   

### Defining sets
n : the length of the word we are counting     
C = { c, cc }     
T = { t, r, l }

T<sub>1</sub> = { t, r, l }     
T<sub>2</sub> = { tt, tr, tl, rr, ll }     
T<sub>3</sub> = { tt, ttr, ttl, trr, tll, rrr, lll }    
Please note: T<sub>3</sub> = tT<sub>2</sub> &oplus; {rrr , lll }    
T<sub>all</sub> = T<sub>1</sub> &cup; T<sub>2</sub> &cup; T<sub>3</sub>    

A word is a formed by choosing symbols alternately from C and T<sub>all</sub>. Valid words before applying rule 5 are elements from sets like:     
C &otimes; T<sub>all</sub> &otimes; C           
C &otimes; T<sub>all</sub> &otimes; C &otimes; T<sub>all</sub> &otimes; C &otimes; T<sub>all</sub>

To apply rule 5 (vertical mirrors), we add extra base sets that do not include l's or series of t's.     
B<sub>1</sub> = { r }			
B<sub>2</sub> = { tr , rr } 		 
B<sub>3</sub> = { ttr , trr , rrr }		     

Please note: if we have the set with all possible words, and subtract from that the set with symmetric words (only t’s, no r’s or l’s), the set of asymmetric words is left. These words can be paired: cr with cl etc.     

To apply rule 6 (horizontal mirrors): We have not yet found an easy way of applying this rule other than deleting double words.     

### Word forming

to be continued



Making of a horizontal mirrored stitch:    
Example: ctrctl     
a)  read word backwards : ltcrtc     
b)  re-order twits groups: t < r < l : tlctrc     
c)  move twits in front to back, replacing l with r, r with l (observation 3) : ctrctr     

d) to make the quartet, apply vertical mirroring (replace r with l, l with r) : ctrctl , ctrctr , ctlctl , ctlctr





***
[&uArr;]()
