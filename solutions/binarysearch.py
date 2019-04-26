
#method 1:
def search(nums, target):
    l,r = 0, len(nums)-1
    
    while (l<=r):
        mid = (l+r)//2
        if nums[mid]<target:
            l=mid+1
        elif nums[mid]>target:
            r=mid-1
        else:
            return mid
        
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

a = search([-2,-3,6,7,8,100], 6)
print(a)