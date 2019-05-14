import random
import os

#method 1:
def search(nums, target):
    l,r = 0, len(nums)-1
    print(f"Left bound: {l} and Right bound: {r}")
    while (l<=r):
        mid = (l+r)//2
        print(f"Mid: {mid}, Value at index: {nums[mid]}.")
        if nums[mid]<target:
            l=mid+1
            print(f"New left bound: {l}, Value at index: {nums[mid]}.")
        elif nums[mid]>target:
            r=mid-1
            print(f"New right bound: {r} Value at index: {nums[mid]}.")
        else:
            return mid
        
        input("Press the <ENTER> key to continue...\n")

    return -1

#     #method 2:
#     def search(nums, target):
#         index = bisect.bisect_left(nums, target)
#         return index if index < len(nums) and nums[index] == target else -1

#     #method 3:
#     def search(nums, target):
#         negativenumbers=0
#         for number in nums:
#             if (number==target):
#                 return negativenumbers
#             if (number-target<0):
#                 negativenumbers+=1
        
    
#         return -1

#test on a small list
a = search([-2,-3,6,7,8,100], 6)
print(a)


#generate and test on large list
n = int(input("How long do you want your list to be?"))
n_1 = n
test_list =[]
while (n>0):
    test_list.append(random.randint(20, 100000))
    n-=1

choice = random.randint(0,n_1)
test_list.sort()


print(f"To find: {test_list[choice]}")

b = search(test_list, test_list[choice])
print(b)
