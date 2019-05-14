#https://leetcode.com/problems/two-sum/submissions/

import time

start = time.time()
nums = [0,0,4,5]


target = 0

#Set up a for up to go through all entries in nums.
for i in range(len(nums)):

    #target-nums[i] is the key here. If the sum exists, then the difference between target and nums[i] will exist.
    try:
        print("Target: ", target-nums[i])
        #Accounts for duplicates in a list that may add up to a sum.
        if (i!=nums.index(target-nums[i])):
            to_return = [i, nums.index(target-nums[i])]
            to_return.sort()
    
    #To avoid the loop stopping if there is a ValueError, as is the case when a sum pair adding up to the target does not exist. 
    except:
        pass

#Track results.
print(to_return)
result = time.time() - start
print(result)

# An inefficient list comprehension method of getting the results.
#indices = [[x,y] for (i,x) in enumerate(nums) for (j,y) in enumerate(nums) if((x+y)== 16021 and i!=j)]