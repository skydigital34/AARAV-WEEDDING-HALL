@echo off
cd /d "d:\SK-TECH SOLUTIONS\sites\wedding hall"
git add .
git commit -m "Push to wedding hall repository"
git remote set-url origin https://github.com/Ramkumar143z/WEDDINGHALL.git 2>nul || git remote add origin https://github.com/Ramkumar143z/WEDDINGHALL.git
git branch -M main
git push -u origin main
