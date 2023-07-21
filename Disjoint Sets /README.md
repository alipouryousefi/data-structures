# Disjoint Sets

Disjoint Sets, also known as Union-Find data structure, is used to efficiently manage a collection of disjoint sets. Each set contains distinct elements, and the data structure allows for efficient union and find operations to merge sets and check if two elements belong to the same set, respectively. This data structure is often used in various algorithms and graph-related problems.

In the example, we create a DisjointSet object, make four sets with elements 1, 2, 3, and 4, then perform a union operation to merge sets containing elements 1 and 2. After the union, the find operation will return the same root for elements 1 and 2, indicating that they belong to the same set.