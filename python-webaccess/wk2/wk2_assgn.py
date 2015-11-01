import re

inputFile = open('regex_sum_189847.txt', 'r')
strFile = ''
sumNums = 0

for line in inputFile:
    strFile = strFile + line

nums = re.findall('[0-9]+', strFile)

print nums
print 'Elements in nums: ' + str(len(nums))

for num in nums:
    sumNums += int(num)

print sumNums
