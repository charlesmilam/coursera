import re

inputFile = open('regex_sum_189847.txt', 'r')
strFile = ''
sumNums = 0

# iterate through the input file and append each line to string
for line in inputFile:
    strFile = strFile + line

# find all occurances of digits within the stringified file
nums = re.findall('[0-9]+', strFile)

print 'Elements in nums: ' + str(len(nums))

# iterate through the list of nums and and sum them
for num in nums:
    sumNums += int(num)

print 'Sum of nums: ' + str(sumNums)
