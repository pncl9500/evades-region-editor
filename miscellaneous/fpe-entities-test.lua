local SightRadius = 8592.4795/100
local PeripheralVisionAngle = 62.161533
if math.abs(short_angle_dist(player, entity)) < sightAngle then

end

-- linear gradient #D0D0D0->#A0A0A0(top to bottom)
-- border 1px #7F7F7F

function BP_MissBloomise:RandomChance()
	sleep(RandomFloatInRange(1, 20) * 1000)
	if RandomIntegerInRange(0, 1) != 0 then
		BP_MissBloomise:ChargeAttack()
	else
		BP_MissBloomise:ProjectileAttack()
	end
	return nil
end

function BP_MissBloomise:ProgressSpeed()
	if BP_MissBloomise.level > 0 then
		if BP_MissBloomise.level >= 20 then
			BP_MissBloomise.HostileSpeed = 14000
			BP_MissBloomise:HostileSprint()
		elseif BP_MissBloomise.level >= 10 then
			BP_MissBloomise.HostileSpeed = 900
			BP_MissBloomise:HostileSprint()
		elseif BP_MissBloomise.level >= 6 then
			BP_MissBloomise.HostileSpeed = 700
			BP_MissBloomise:HostileSprint()
		elseif BP_MissBloomise.level >= 3 then
			BP_MissBloomise.HostileSpeed = 500
			BP_MissBloomise:HostileSprint()
		else
			BP_MissBloomise.HostileSpeed = 400
		end
	end
	return nil
end
function BP_MissCicles:ProgressSpeed()
	if BP_MissCicles.level > 0 then
		if BP_MissCicles.level >= 20 then
			BP_MissCicles.HostileSpeed = 1100
			BP_MissCicles:HostileSprint()
		elseif BP_MissCicles.level >= 10 then
			BP_MissCicles.HostileSpeed = 600
			BP_MissCicles:HostileSprint()
		elseif BP_MissCicles.level >= 6 then
			BP_MissCicles.HostileSpeed = 500
			BP_MissCicles:HostileSprint()
		elseif BP_MissCicles.level >= 3 then
			BP_MissCicles.HostileSpeed = 400
			BP_MissCicles:HostileSprint()
		else
			BP_MissCicles.HostileSpeed = 300
		end
	end
	return nil
end
local Modifiers = {
	TeachersDay = {
		Difficulty = 1,
		MissCirclesCount = 10,
		MissBloomieCount = 10,
		MissThavelCount = 10,
	},
	SchoolDropout = {
		Difficulty = 4, -- AI level increases by 5 every time someone fails
	},
	OreoApocalypse = {
		Difficulty = 2,
		MissCirclesCount = 5,
		MissBloomieCount = 0,
		MissThavelCount = 0,
	},
	ScienceStuff = {
		Difficulty = 4,
		MissCirclesCount = 0,
		MissBloomieCount = 5,
		MissThavelCount = 0,
	},
	HuntingLesson = {
		Difficulty = 6,
		MissCirclesCount = 0,
		MissBloomieCount = 0,
		MissThavelCount = 5,
	},
	PureNightmare = {
		Difficulty = 10,
		MissCirclesCount = 1,
		MissBloomieCount = 1,
		MissThavelCount = 1,
	},
}
function BP_MissThavel:GetDifficulty()
	return nil
end
BP_MissBloomise.PassiveSpeed = 300
BP_MissBloomise.HostileSpeed = 400
BP_MissCicles.PassiveSpeed = 300
BP_MissCicles.HostileSpeed = 300
BP_MissThavel.PassiveSpeed = 200
BP_MissThavel.HostileSpeed = 300
BP_MissThavel.InvisSpeed = 2000

BP_MissBloomise.BaseDamage = 40
BP_MissCicles.BaseDamage = 100
BP_MissThavel.BaseDamage = 30
BP_MissThavel.EnhancedDamageAdditioner = 50

BP_MissThavel.ThavelFollowPatience = 10

function WB_TestQuestions:RandomTestCheck()
	if WB_TestQuestions.Math then
		WB_TestQuestions:RandomTestMath()
	elseif WB_TestQuestions.Science then
		WB_TestQuestions:RandomTestScience()
	else
		WB_TestQuestions:RandomTestLanguage()
	end
	return nil
end

function WB_TestQuestions:RandomTestMath()
	WB_TestQuestions:WallOfQuestionTest = ""
	WB_TestQuestions:Question1 = ""
	WB_TestQuestions:Question2 = ""
	WB_TestQuestions:Question3 = ""
	WB_TestQuestions:Question4 = ""
	WB_TestQuestions:Q1Correct = false
	WB_TestQuestions:Q2Correct = false
	WB_TestQuestions:Q3Correct = false
	WB_TestQuestions:Q4Correct = false
	WB_TestQuestions:PictureDisplay = ""
	CallFunc_RandomIntegerInRange_ReturnValue = RandomIntegerInRange(0, 10)
	if CallFunc_RandomIntegerInRange_ReturnValue == 0 then
		WB_TestQuestions:WallOfQuestionTest = "What is 10x5?"
		WB_TestQuestions:Question1 = "50"
		WB_TestQuestions:Question2 = "100"
		WB_TestQuestions:Question3 = "40"
		WB_TestQuestions:Question4 = "55"
		WB_TestQuestions:Q1Correct = true
	elseif CallFunc_RandomIntegerInRange_ReturnValue == 1 then
		WB_TestQuestions:WallOfQuestionTest = "What is 58 Divided by 6?"
		WB_TestQuestions:Question1 = "4.3"
		WB_TestQuestions:Question2 = "9.6"
		WB_TestQuestions:Question3 = "7.6"
		WB_TestQuestions:Question4 = "7.7"
		WB_TestQuestions:Q2Correct = true
	elseif CallFunc_RandomIntegerInRange_ReturnValue == 2 then
		WB_TestQuestions:WallOfQuestionTest = "What is the \r\nSum of first 5 numbers?"
		WB_TestQuestions:Question1 = "5"
		WB_TestQuestions:Question2 = "25"
		WB_TestQuestions:Question3 = "15"
		WB_TestQuestions:Question4 = "50"
		WB_TestQuestions:Q3Correct = true
	elseif CallFunc_RandomIntegerInRange_ReturnValue == 3 then
		WB_TestQuestions:WallOfQuestionTest = "Who was the greatest\r\nmathematician in history"
		WB_TestQuestions:Question1 = "Aryabhata"
		WB_TestQuestions:Question2 = "Me"
		WB_TestQuestions:Question3 = "Eggman"
		WB_TestQuestions:Question4 = "Archimedes"
		WB_TestQuestions:Q4Correct = true
	elseif CallFunc_RandomIntegerInRange_ReturnValue == 4 then
		WB_TestQuestions:WallOfQuestionTest = "Honestly I don't know what to ask\r\nso uhm oreos?"
		WB_TestQuestions:Question1 = "Oreos"
		WB_TestQuestions:Question2 = "Oreos"
		WB_TestQuestions:Question3 = "Oreos"
		WB_TestQuestions:Question4 = "Oreos"
	elseif CallFunc_RandomIntegerInRange_ReturnValue == 5 then
		WB_TestQuestions:WallOfQuestionTest = "Answer This Question!"
		WB_TestQuestions:Question1 = "42"
		WB_TestQuestions:Question2 = "63"
		WB_TestQuestions:Question3 = "43"
		WB_TestQuestions:Question4 = "21"
		WB_TestQuestions:PictureDisplay = "Matrh1"
	elseif CallFunc_RandomIntegerInRange_ReturnValue == 6 then
		WB_TestQuestions:WallOfQuestionTest = "I'd love an oreo milkshake"
		WB_TestQuestions:Question1 = "No"
		WB_TestQuestions:Question2 = "No"
		WB_TestQuestions:Question3 = "No"
		WB_TestQuestions:Question4 = "Yes but actually No"
	elseif CallFunc_RandomIntegerInRange_ReturnValue == 7 then
		WB_TestQuestions:WallOfQuestionTest = "What is 1+5?"
		WB_TestQuestions:Question1 = "6.1"
		WB_TestQuestions:Question2 = "5"
		WB_TestQuestions:Question3 = "8"
		WB_TestQuestions:Question4 = "5"
	elseif CallFunc_RandomIntegerInRange_ReturnValue == 8 then
		WB_TestQuestions:WallOfQuestionTest = "Is it mathematically possible \r\nto backflip while in the air?"
		WB_TestQuestions:Question1 = "Yes"
		WB_TestQuestions:Question2 = "No"
		WB_TestQuestions:Question3 = "What"
		WB_TestQuestions:Question4 = "Oreos"
	elseif CallFunc_RandomIntegerInRange_ReturnValue == 9 then
		WB_TestQuestions:WallOfQuestionTest = "Proper method of eating oreos?"
		WB_TestQuestions:Question1 = "Licking off the milk part"
		WB_TestQuestions:Question2 = "Severe case of Autism"
		WB_TestQuestions:Question3 = "Any Method"
		WB_TestQuestions:Question4 = "Just Eat It"
		WB_TestQuestions:PictureDisplay = "MissCircleBuyingStuff"
	else
		WB_TestQuestions:WallOfQuestionTest = "WALL OF TEXT"
		WB_TestQuestions:Question1 = "QUESTION 1"
		WB_TestQuestions:Question2 = "QUESTION 2"
		WB_TestQuestions:Question3 = "QUESTION 3"
		WB_TestQuestions:Question4 = "This is intentional"
		WB_TestQuestions:PictureDisplay = "Cringe"
	end
	return nil
end
-- Only 4 out of 11 questions are possible without letting them become hostile when you find the correct answer


function BP_MissThavel_C:ReceiveBeginPlay()
	--execute ubergraph at index 13616
	self.Director_Data = GetActorOfClass(BP_TheDirector_C)
	local E = DynamicCast(GetGameInstance())
        if E then
		self.GI_Data = E
		self:ProgressSpeed()
	end
end
function BP_MissThavel_C:ProgressSpeed()
	if self.Director_Data.AILevel_MT > 0 then
		if self.Director_Data.AILevel_MT >= 20 then
			self.HostileSpeed = 800
			self.HostileChargeSpeed = 1000
			self:HostileSprint()
		elseif self.Director_Data.AILevel_MT >= 10 then
			self.HostileSpeed = 700
			self.HostileChargeSpeed = 800
			self:HostileSprint() --jump to index 186
		elseif self.Director_Data.AILevel_MT >= 6 then
			self.HostileSpeed = 500
			self.HostileChargeSpeed = 700
			self:HostileSprint() --jump to index 186
		elseif self.Director_Data.AILevel_MT >= 3 then
			self.HostileSpeed = 400
			self.HostileChargeSpeed = 700
			self:HostileSprint() --jump to index 186
		else
			self.HostileSpeed = 300
			self.HostileChargeSpeed = 700
		end
	end
end
function BP_MissThavel_C:HostileSprint()
	--execute ubergraph at index 14032
	self.CharacterMovement.MaxWalkSpeed = self.HostileSpeed
end

function BP_MissThavel_C:ReceiveTick(DeltaSeconds)
	local K2Node_Event_DeltaSeconds = DeltaSeconds
	--execute ubergraph at index 13795
	if self.FollowPlayerClose_ then --push execution flow for index 13860
		if self.Mesh:WasRecentlyRendered(0.05) or self.Shadow:WasRecentlyRendered(0.05) then
			--jump to index 7782
			if not self.Temp_bool_IsClosed_Variable_2 then --push execution flow for index 7597
				self.Temp_bool_IsClosed_Variable_2 = true
				self.TheySawUs = true
				self.Homing = true
				self:InstaAttack()
				timer.Simple(10.0,function()
					--execute ubergraph at index 3390
					self:AttackAgain()
				end)
			end
			if not self.Temp_bool_Has_Been_Initd_Variable_2 then --push execution flow for index 7751
				self.Temp_bool_IsClosed_Variable_2 = false
				self.Temp_bool_Has_Been_Initd_Variable_2 = true --jump to index 7714
			end
		end
	end
	if self.Homing then --push execution flow for index 13998
		self:LookAtPlayer(self.Look_Target)
	end
	timer.Simple(1.0,function()
		--execute ubergraph at index 3177
		if self:Host_Hostile_() then
			if not self.Temp_bool_IsClosed_Variable then --push execution flow for index 3234
				self.Temp_bool_IsClosed_Variable = true
				self:HostileAI()
				self:ProgressSpeed() --jump to index 15
			end
			if not self.Temp_bool_Has_Been_Initd_Variable then
				self.Temp_bool_Has_Been_Initd_Variable = true
			end
	end)
end
function BP_MissThavel_C:InstaAttack()
	--execute ubergraph at index 13017
	print("Seen")
	self.FollowPlayerClose_ = false
	self.CharacterMovement.MaxWalkSpeed = self.HostileChargeSpeed --jump to index 6947
	self.AttackCooldown_ = false
	self.FollowingPlayer_ = false
	self.Stealth_ = false
	timer.Simple(5.0,function()
		--execute ubergraph at index 2983
		self:ForceAmbush()
	end)
end
function BP_MissThavel_C:ForceAmbush()
	--execute ubergraph at index 13194
	self:AmbushPhase() --jump to 7582
end
function BP_MissThavel_C:DoNothing() end
function BP_MissThavel_C:AmbushPhase()
	--execute ubergraph at index 10156
	self.Stealth_ = true
	self.AttackCooldown_ = true
	local Anim = self.Shadow.CreateProxyObjectForPlayMontage("Thavel-Hide_Montage", 1, 0, "None") -- UID 031E64F0436C0B9FE43460B36C6CC258
	local Anim2 = self.Mesh.CreateProxyObjectForPlayMontage("Thavel-Hide_Montage", 1, 0, "None") -- UID D24431FE4D2C487CD2795985B9A1E67F
	if IsValid(Anim) then
		Anim.BindDelegate("OnCompleted",self.DoNothing)
		Anim.BindDelegate("OnBlendOut",self.DoNothing)
		Anim.BindDelegate("OnInterrupted",self.DoNothing)
		Anim.BindDelegate("OnNotifyBegin",self.DoNothing)
		Anim.BindDelegate("OnNotifyEnd",self.DoNothing)
	elseif IsValid(Anim2) then
		Anim2.BindDelegate("OnCompleted",function(E)
			--execute ubergraph at index 4225
			self.Temp_name_Variable_3 = E
			self.Mesh:SetVisibility(false, true)
			self.FoundSpot_ = false
			self:LookForASpot(true)
			self.CharacterMovement.MaxWalkSpeed = self.InvisSpeed
		end)
		Anim2.BindDelegate("OnBlendOut",self.DoNothing)
		Anim2.BindDelegate("OnInterrupted",self.DoNothing)
		Anim2.BindDelegate("OnNotifyBegin",self.DoNothing)
		Anim2.BindDelegate("OnNotifyEnd",self.DoNothing)
	end
end
function BP_MissThavel_C:Host_Hostile_()
	if self.Director_Data.AILevel_MT > 0 then return true end
	return false
end
function BP_MissThavel_C:LookForASpot(is11023)
	--execute ubergraph at index 11023 or 1245
	if not self.FoundSpot_ then
		if is11023 then
			print("Looking for a spot")
		end
		local myPos = self:K2_GetActorLocation()
		local randomPoint = K2_GetRandomReachablePointInRadius(myPos, 10000)
		local moveTo = self:CreateMoveToProxyObject(randomPoint, 25.0, false) -- UID FB7A502E4557F70FD4D356A17E321419
		if true then
			moveTo.BindDelegate("OnSuccess",function(E)
				--execute ubergraph at index 4081
				self.Temp_byte_Variable_2 = E.MovementResult
				local rand = math.random(0, 6) --jump to index 1260
				if rand != 6 then
					self:LookForASpot(true)
				elseif rand == 6 then
					if not FoundSpot_ then
						self.FoundSpot_ = true
					end
				end
			end)
			moveTo.BindDelegate("OnFail",function(E)
				--execute ubergraph at index 4049
				self.Temp_byte_Variable_2 = E.MovementResult
				local rand = math.random(0, 6) --jump to index 1260
				if rand != 6 then
					self:LookForASpot(true)
				elseif rand == 6 then
					if not FoundSpot_ then
						self.FoundSpot_ = true
					end
				end
			end)
			timer.Simple(5.0,function()
				if not self.FoundSpot_ then
					local rand = math.random(0, 6) --jump to index 1260
					if rand != 6 then
						self:LookForASpot(true)
					elseif rand == 6 then
						if not self.FoundSpot_ then
							self.FoundSpot_ = true
						end
					end
				end
			end)
		else
			timer.Simple(5.0,function()
				if not self.FoundSpot_ then
					local rand = math.random(0, 6) --jump to index 1260
					if rand != 6 then
						self:LookForASpot(true)
					elseif rand == 6 then
						if not self.FoundSpot_ then
							self.FoundSpot_ = true
						end
					end
				end
			end)
		end
	end
end
