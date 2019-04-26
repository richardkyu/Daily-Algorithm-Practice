def search(nums, target):
	low, high = 0, len(nums) - 1
	while low <= high:
		mid = low + high >> 1
		if nums[mid] == target:
			return mid

		if (target < nums[0] and not target < nums[mid] < nums[0] or
				target >= nums[0] and nums[0] <= nums[mid] < target):
			low = mid + 1
		else:
			high = mid - 1
	return -1

# O(n) time solution
# def search(nums,target):
#     i = 0
#     for number in nums:
#         if (number==target):
#             return i
#         else:
#             i+=1
#     return -1

a = search([4,5,6,7,0,1,2],0)
print(a)