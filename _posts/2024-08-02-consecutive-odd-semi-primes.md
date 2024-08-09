---
title: Rabbit Hole &#35;2 - Consecutive *Odd* Semi-Primes
description: What is the longest possible chain of consecutive *odd* semi-primes?
date: 2024-08-08 12:27:00 -0800 # 12:00:00 - 0800 is 9 am
categories: [Recreational Mathematics, Rabbit Holes]
tags: [numbers,semi-primes,moderate-jargon,number-nerds,open-questions]
math: true
published: true
audience: Number Nerds
---
<small>Audience: <b>{{ page.audience }}</b></small>

<small><i class= "fas fa-triangle-exclamation"></i> **Moderate Jargon Alert:** This post is primarily aimed at people who are comfortable using numbers as play objects, so the post's jargon rating is moderate. New to this? *don't let that put you off*, we all started somewhere!</small>

---

I know what you're thinking: "*Why Vanessa, that's an odd question*", to which I'd respond, "*Well, it's not as fun when it's even*" * dodges tomatoes *. 

Bad jokes aside, the keenest readers may recall a previous rabbit hole addressing strings of consecutive semi-primes (see [Rabbit Hole #1](https://vanessamadu.github.io/posts/consecutive-semi-primes/)). Well, asking about consecutive *odd* semi-primes was the natural next step... obviously...

> **Plain Language Question:** Can you find a pair of consecutive odd numbers (odd numbers that differ from each other by two, e.g. 1 and 3) that are both semi-prime (have precisely two, not necessarily distinct, prime factors, e.g. $$4=2\times 2$$ or $$15 = 3\times 5$$)? Can you find a triple? A quadruple? What is the longest possible chain of consecutive odd semi-primes? Is there one?
{: .prompt-tip}

And a mathematical language version for my colleagues or those otherwise inclined:

>**Question (Mathematically expressed):** Can you find $$n\in\mathbb{Z}_{\geq 0}$$ such that all the terms in the sequence $$a_k(n) = 2(n+k)+1$$ are semi-prime, where $$k \in \{1,\dots,K\}, K\in\mathbb{Z}_{\geq 1}$$? Does $$n$$ exist for all $$K$$?
{: .prompt-tip}

Readers who are less familiar with mathematical terminology may find it interesting to try to translate the mathematical symbols using the plain English version provided. Isn't language learning fun?! 

**Note**: For all of the sequence lengths that follow, the sequence I've included is the first one (with that length) of consecutive odd semi-primes you'll encounter when counting up from zero.

--- 

## Pairs, Triples and Quadruples ($$k=1,2,3$$)

Do you remember that code I wrote for the quadruple of consecutive semi-primes?[^ref-rabbit-hole-1] Yes, the code I wrote without pausing to think that ended up being completely redundant and a bit of a facepalm? WELL ITS PRETTY DAMN USEFUL NOW! Though, on a matter of principle and mathematician's pride, I did do the first pair of consecutive odd semi-primes by hand:

|Sequence Length|Sequence Terms *|
|---------------|--------------|
|2              |33, 35         |
|3              |91, 93, 95      |
|4              |299, 301, 303, 305|

<small>* Verifying that the sequence terms are indeed semi-prime is a (hazing) exercise left for the reader.</small>

An immediately apparent pattern is that as the number of terms in the sequence increases, the size of the numbers in the sequence also increases.

Then something interesting happened: I looked at a sequence with five terms:

## Quintuples of Consecutive Odd Semi-Primes ($$k=4$$)

|Sequence Length|Sequence Terms|
|---------------|--------------|
|4              |299, 301, 303, 305|
|5              |213, 215, 217, 219, 221|

<small>(these are the first quads and quints)</small>

The numbers in the quintuple are smaller! 

It is tempting to make a statement like "*as the length of the sequence increases, the size of the numbers in the sequence also increases*". This statement 'feels' like that should be true, and it matches our precedent, but this is a lovely example of why we *need to* prove things. While the feelings we get about numbers should be noted, they should not be given ultimate rule; in this neighbourhood, a feeling is not enough. 

In terms of *why* the values in the quintuple are smaller, you might find this annoying, but I think it just happened to end up that way (but I'd be delighted to be wrong about that). I wonder if the random distribution of the primes among whole numbers has interesting consequences on the distribution of semi-primes, but that's for another day.

## Sextuples and more ($$k \geq 5$$)

Given what we learned about consecutive semi-primes and how there can't be more than 3 of them [^ref-rabbit-hole-1], I went into this with suspicions that the max number of consecutive odd semi-primes would be (at most) 8 (see if you can figure out why while I show you the next few sequences):

|Sequence Length|Sequence Terms|
|---------------|--------------|
|6              |1383, 1385, 1387, 1389, 1391, 1393|
|7              |3091, 3093, 3095, 3097, 3099, 3101, 3103|
|8              |8129, 8131, 8133, 8135, 8137, 8139, 8141, 8143|

So, what do you think? Can we go higher? 

No. 

Since we are dealing with odd numbers, there are no multiples of four to worry about as in [Rabbit Hole #1](https://vanessamadu.github.io/posts/consecutive-semi-primes/). The next potential spanner in the semi-prime sequence works is the next square—nine. 

In nine (or more) consecutive odd numbers, we *will* bump into a multiple of nine, and if we bump into a multiple of nine, then that number would be $$3\times 3 \times something else$$, and that is not semi-prime! 

So, in answer to the question

> What is the longest possible chain of consecutive odd semi-primes? Is there one?
{: .prompt-tip}

There is indeed a longest possible chain of consecutive odd semi-primes, and it has a length of eight.

## Other Rabbit Holes to Explore

I have been resisting the mathematician's urge to abstract, but if you've stuck with me this far, I doubt you'll mind me indulging in a bit of abstraction.

The chief question for me here is, does this continue? What about the longest sequence of semi-primes with a difference of three or four? Are there surprising/lovely/curious patterns in semi-prime sequences with non-fixed deterministic spacings, e.g. spacing increasing by one for each successive term in the sequence? Will the presence of a square in these more abstract sequences be unavoidable, ensuring a finite longest semi-prime sequence for these other spacings?

I don't know, but what do you think?

[^ref-rabbit-hole-1]: Reference to [Rabbit Hole #1](https://vanessamadu.github.io/posts/consecutive-semi-primes/)


