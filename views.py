from django.shortcuts import render,redirect
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Member
import os

def index(request):
	return render(request,'index.html')

def resume(request):
	return render(request,'resume.html')

def create(request):
    if request.method == 'POST':
        member = Member(
        firstname = request.POST.get('firstname'),
        middlename = request.POST.get('middlename'),
        lastname = request.POST.get('lastname'),
        designation = request.POST.get('designation'),
        address = request.POST.get('address'),
        email = request.POST.get('email'),
        phone = request.POST.get('phone'),
        summary = request.POST.get('summary'),
        title = request.POST.get('title'),
        description = request.POST.get('description'),
        position = request.POST.get('position'),
        company = request.POST.get('company'),
        location = request.POST.get('location'),
        startdate = request.POST.get('startdate'),
        enddate = request.POST.get('enddate'),
        jobdescription = request.POST.get('jobdescription'),
        school = request.POST.get('school'),
        degree = request.POST.get('degree'),
        city = request.POST.get('city'),
        startdate1 = request.POST.get('startdate1'),
        enddate1 = request.POST.get('enddate1'),
        brdescription = request.POST.get('brdescription'),
        projectname = request.POST.get('projectname'),
        projectlink = request.POST.get('projectlink'),
        projectdescription = request.POST.get('projectdescription'),
        skills = request.POST.get('skills'),
        )

        if 'image' in request.FILES:
            member.image = request.FILES['image']
        member.save()
        return redirect('read/')
        context ={'member':member}
    return render(request, "resume2.html",context)

def read(request):
    member = Member.objects.all()
    context = {'member': member}
    return render(request, "resume2.html", context)
