---
title: Rabbit Hole &#35;2 - Consecutive *Odd* Semi-Primes
description: What is the longest possible chain of consecutive *odd* semi-primes?
date: 2024-08-08 12:27:00 -0800 # 12:00:00 - 0800 is 9 am
categories: [Recreational Mathematics, Rabbit Holes]
tags: [numbers,semi-primes,moderate-jargon,number-nerds]
math: true
published: false
audience: Number Nerds
---
<small>Audience: <b>{{ page.audience }}</b></small>

<small><i class= "fas fa-triangle-exclamation"></i> **Moderate Jargon Alert:** This post is primarily aimed at people who are comfortable using numbers as play objects, so the post's jargon rating is moderate. New to this? *don't let that put you off*, we all started somewhere!</small>

---

I know what you're thinking; "*why Vanessa, that's an odd question*", to which I'd respond, "*Yep, its not as fun when its even*" * dodges tomatoes*. 

Bad jokes aside, once I'd cracked the question of consecutive semi-primes (see [Rabbit Hole #1](https://vanessamadu.github.io/posts/consecutive-semi-primes/)), asking about consecutive odd semi-primes was the natural next step... of course...

But, enough rambling, here's the question:

> **Plain Language Question:** Can you find a pair of consecutive odd numbers (odd numbers that differ from each other by two, e.g. 1 and 3) that are both semi-prime (have precisely two, not necessarily distinct, prime factors e.g. $$4=2\times 2$$ or $$15 = 3\times 5$$)? Can you find a triple? A quadruple? What is the longest possible chain of consecutive odd semi-primes? Is there one?
{: .prompt-tip}

and a mathematical language version for my colleagues or those otherwise inclined:

>**Question (Mathematically expressed):** Can you find $$n\in\mathbb{Z}_{\geq 0}$$ such that all the terms in the sequence $$a_k(n) = 2(n+k)+1$$ are semi-prime, where $$k \in \{1,\dots,K\}, K\in\mathbb{Z}_{\geq 1}$$? Does $$n$$ exist for all $$K$$?
{: .prompt-tip}

Readers who are less familiar with mathematical terminology may find it interesting to try and translate the mathematical symbols using the plain English version provided :) Isn't language learning fun?! 

---

## Pairs, Triples and Quadruples ($$k=1,2,3$$)

I came across the smallest pair of odd consecutive semi-primes while answering a different, albeit similar, question (that happens in maths...*a lot*), "*can you find a pair of consecutive odd numbers that have the same number of prime factors*", which becomes our question when looking at odd numbers that have two prime factors! 

Do you remember that code I wrote for the quadruple of consectuive semi-primes? You know, the code I wrote without pausing to think and it ended up being totally redundant? WELL ITS PRETTY DAMN USEFUL NOW! Though, on a matter of principle and mathematician's pride, I did do the first pair of consecutive odd primes by hand:

|Sequence Length|Sequence Terms|
|---------------|--------------|
|2              |33, 35         |
|3              |91, 93, 95      |
|4              |299, 301, 303, 305|

Verification that the sequence terms are in fact semi-prime is a (hazing) exercise left for the reader. My code calculates the first chain of sequence of consecutive odd semi-primes for a particular length.

So in terms of patterns, one that is apparent is that as the number of terms in the sequence increases, the size of the numbers in the sequence also increase.

Then something interesting happened: I looked at a sequence with five terms:

## Quintuples of Consecutive Odd Semi-Primes ($$k=4$$)

|Sequence Length|Sequence Terms|
|---------------|--------------|
|4              |299, 301, 303, 305|
|5              |213, 215, 217, 219, 221|

The numbers in the quintuple are smaller! It is tempting to make a statement like "sequence increases, the size of the numbers in the sequence also increase" becuase it 'feels' like that should be true and that's what has happened so far but this is a nice example of why we need to prove things! While the feelings we get about numbers are important, in these parts, a feeling is not enough. In terms of why the values in the quintuple are smaller, I think, and this is annoying, but, because it happened to end up that way. I do wonder if the random distribution of the primes among whole numbers has interesting consequences on the distribution of semi-primes but that's for another day.

## Sextuples and more ($$k \geq 5$$)

Given what I learned about consecutive semi-primes and how there can't be more than 3 consecutive semi-primes, I went into this with suspicions that the max number of consecutive odd semi-primes would be (at most) 8 (see if you can figure out why while I show you the next few sequences):

|Sequence Length|Sequence Terms|
|---------------|--------------|
|6              |1383, 1385, 1387, 1389, 1391, 1393|
|7              |3091, 3093, 3095, 3097, 3099, 3101, 3103|
|8              |8129, 8131, 8133, 8135, 8137, 8139, 8141, 8143|

So, what do you think? Can we go higher? 

Nope. Why? Well, thinking back to the reasoning from Rabbit Hole #1, we looked for the first time that we knew we'd encounter a multiple of a square, and with four consecutive numbers we would bump into a multiple of four and a multiple of four (bigger than four) can't be semi-prime. Why? Well, a multiple of four would be $$4\times something else = 2 \times 2 \times something else$$ and even if that $$something else$$ was prime, we have at least three prime factors on our hands! 

Since we are dealing with odd numbers, there are no multiples of four to worry about, let's step up to the next square -- nine. 

In nine (or more) consecutive odd numbers, we *will* bump into a multiple of nine and if we bump into a multiple of nine then that number would be $$3\times 3 \times something else$$ and that is not semi-prime! 

So in answer to the question

> What is the longest possible chain of consecutive odd semi-primes? Is there one?
{: .prompt-tip}

there is indeed a longest possible chain of consectuive off semi-primes and that length is eight.

## Other Rabbit Holes to Explore

I have been resisting the mathematician urge to abstract but if you've stuck with me this far, I doubt you'll mind me induldging in a bit of abstraction.

The chief question that come up for me here is does this continue? What about the longest sequence of semi-primes with a difference of three, or four? Are there other interesting patterns in sequences of semi-primes with increasing spacings or non-fixed spacings defined e.g. spacing increasing by one for each successive term in the sequence. Will the limiting factor of the longest sequences of semi-primes with various spacings be down to it being impossible to create a sequence without a square? 

I don't know; what do you think?

