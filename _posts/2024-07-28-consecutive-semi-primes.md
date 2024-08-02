---
title: Rabbit Hole &#35;1 - Consecutive Semi-Primes
description: What is the longest possible chain of consecutive semi-primes?
date: 2024-07-28 12:19:00 -0800 # 12:00:00 - 0800 is 9 am
categories: [Recreational Mathematics, Rabbit Holes]
tags: [numbers,semi-primes]
math: true
mermaid: true
---
Colin first posed this one to me after I had told him about a conversation I had on the train about consecutive numbers that have the same number of distinct prime factors. Here's the question:

> **Question:** What is the smallest $$n$$-tuple of consecutive semi-primes for a given $$n$$? Do $$n$$-tuples of consecutive primes exist for all $$n$$?
{: .prompt-tip}

A good place to start is with a definition:

Definition
  : *Semi-prime*: A positive integer is semi-prime if it has exactly two prime factors. The two prime factors do not need to be unique.


---

When I first saw this, I rushed to write some code, but that is unadvisable for reasons that are about to become very clear.

## Pairs of Consecutive Semi-Primes ($$n=2$$)

This is relatively easy to do. A small amount of tinkering will land you at $$(9,10)$$ being the smallest pair of consecutive semi-primes. 

|Semi-Prime|Prime Factors|
|----------|-------------|
|9         |3, 3         |
|10        |2, 5         |

## Triples of Consecutive Semi-Primes ($$n=3$$)

Takes a tiny bit more time to do by hand but the smallest triple is $$(33,34,35)$$.

|Semi-Prime|Prime Factors|
|----------|-------------|
|33        |3, 11        |
|34        |2, 17        |
|35        |5, 7         |

## Quads and more ($$n\geq 4$$)

This was the stage at which I anticipated the smallest quadruple would be too large to do by hand. So without much more thought, I wrote some code with the intention of **BRUTE FORCE**. 

```python
import numpy as np
import sympy

def is_semiprime(n):
 
    for i in range(2, n//2+1):
        if n % i == 0:
            quotient = n//i
            if sympy.isprime(i) and sympy.isprime(quotient):
                return True
    return False

def consecutive_semi_primes(num,max_int):
    padded_truth_array = np.zeros(num+2)
    padded_truth_array[1:-1] = np.ones(num)
    x = np.arange(2,max_int)
    semi_prime_x = [is_semiprime(ii) for ii in x]
    for ii in range(1,max_int-num-2):
        if (semi_prime_x[ii-1:ii+num+1] == padded_truth_array).all():
            return x[ii:ii+num]

print(consecutive_semi_primes(4,10000))
```

Looking for quadruples all the way up to 10000? I told you, **BRUTE FORCE**. However, this is an excellent example of brains over brawn. One of the first questions one should ask themselves before rushing gung-ho into code is, is this possible in the first place? (*facepalm incoming*).

Say there was a quadruple of consecutive semi-primes. Well, in any consecutive four integers, there is precisely one multiple of four, so one of the numbers in the quadruple, let's call it $$q$$, can be written as $$q = 4 \times m$$ where $m$ is some prime number. Now look at that very closely. See the problem? $$q$$ isn't semi-prime! It can't be! Why? Because it has three prime factors, $$2, 2$$ and $$m$$. So a quadruple of consecutive semi-primes does not exist!

Further, this is true for any $$n$$-tuple of consecutive integers where $$n\geq 4$$, since the $$n$$-tuple will always contain at least one multiple of four, so in answer to the question 

> Do $$n$$-tuples of consecutive semi-primes exist for all $$n$$?
{: .prompt-tip}

No, they only exist for $$n<4$$.