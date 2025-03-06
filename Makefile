########################################################################
####################### Makefile Template ##############################
########################################################################
# Student settings
NAME = Hayden Johnson
SID = 1001871835
EMAIL = hcj1835@mavs.uta.edu
SEMESTER = SPRING2025
PROJECT=PROJ03
YOUTUBE = https://youtu.be/aD80Zp6yJ6A

####### DO NOT EDIT BELOW THIS LINE!!! #########
author: 
	@echo $(NAME)
	@echo $(SID)
	@echo $(EMAIL)
	@echo $(SEMESTER)
	@echo $(YOUTUBE)
submit:
submit:
	git ls-files | zip -r "submission_$(SEMESTER)_$(PROJECT)_$(SID)_$(NAME).zip" -@
	@echo "Submission zip file created: submission_$(SEMESTER)_$(PROJECT)_$(SID)_$(NAME).zip"