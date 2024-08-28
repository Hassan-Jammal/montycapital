<template lang="">
    <section class="banner extra-spacing">
        <div class="container">
            <div class="wrapper">
                <AppLogoVertical />

                <h1 class="heading" data-aos="fade-up" data-aos-delay="100">Start-Up Application</h1>
            </div>
        </div>
    </section>

    <section class="form">
        <div class="container">
            <div class="wrapper">
                <div class="form-group" data-aos="fade-up">
                    <div class="input-container">
                        <label for="company_name" class="input-label">Company Name</label>
                        <input v-model="form.company_name" type="text" id="company_name" class="input-field">
                        <div v-if="errors.company_name" class="input-error">{{ errors.company_name }}</div>
                    </div>
                </div>

                <div class="form-group" data-aos="fade-up">
                    <div class="input-container">
                        <label for="link" class="input-label">Website</label>
                        <input v-model="form.link" type="text" id="link" placeholder="https:\\example.com"
                            class="input-field">
                        <div v-if="errors.link" class="input-error">{{ errors.link }}</div>
                    </div>
                    <div class="input-container">
                        <label for="company_location" class="input-label">Company HQ Location</label>
                        <input v-model="form.company_location" type="text" id="company_location" class="input-field">
                        <div v-if="errors.company_location" class="input-error">{{ errors.company_location }}</div>
                    </div>
                </div>

                <div class="form-group no-space" data-aos="fade-up">
                    <div class="input-container">
                        <label>Primary Contact</label>
                        <input v-model="form.first_name" type="text" id="first_name" placeholder="First Name"
                            class="input-field">
                        <div v-if="errors.first_name" class="input-error">{{ errors.first_name }}</div>
                    </div>
                    <div class="input-container">
                        <label>&nbsp;</label>
                        <input v-model="form.last_name" type="text" id="last_name" placeholder="Last Name"
                            class="input-field">
                        <div v-if="errors.last_name" class="input-error">{{ errors.last_name }}</div>
                    </div>
                </div>

                <div class="form-group" data-aos="fade-up">
                    <div class="input-container">
                        <label for="title" class="input-label">Title</label>
                        <input v-model="form.title" type="text" id="title" class="input-field">
                        <div v-if="errors.title" class="input-error">{{ errors.title }}</div>
                    </div>

                    <div class="flex flex-col gap-1 w-full">
                        <label for="selected-country" class="input-label">Phone Number</label>
                        <div class="flex flex-row gap-2">
                            <div class="input-container w-[160px]">
                                <div @click="toggleDropdown" class="custom-dropdown input-field cursor-pointer">
                                    <div id="selected-country" class="selected-country">

                                        <img class="selected-country--image"
                                            :src="`/images/flags/${selectedCountry.iso2 || 'LB' }.svg`"
                                            :alt="selectedCountry.name || 'Lebanon'" width="24" height="24">

                                        <span class="selected-country--name">+{{ selectedCountry.code ||
                                            '961' }}</span>

                                        <!-- <Icon name="fa6-solid:angle-down" class="selected-country--icon"
                                        :class="{'rotate-180': showDropdown}" /> -->
                                    </div>
                                </div>
                                <input v-model="form.code" type="hidden" id="code">
                                <div v-if="errors.code" class="input-error">{{ errors.code }}</div>
                            </div>

                            <ul v-if="showDropdown" ref="dropdownContainer" @scroll="handleScroll"
                                class="dropdown-container">
                                <input v-model="searchQuery" type="text" id="search" placeholder="Search"
                                    class="input-search">
                                <template v-for="country in filteredCountries">
                                    <li v-if="country.status == 1" :key="country.id" @click="selectCountry(country)"
                                        class="item">
                                        <img :src="`/images/flags/${country.iso2}.svg`" :alt="country.name" width="24"
                                            height="24" />
                                        <span class="text-slate-500">(+{{ country.code }})</span>
                                        {{ country.name }}
                                    </li>
                                </template>
                            </ul>

                            <div class="input-container">
                                <input v-model="form.mobile" type="text" id="mobile" placeholder="Phone Number"
                                    class="input-field">
                                <div v-if="errors.mobile" class="input-error">{{ errors.mobile }}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="form-group" data-aos="fade-up">
                    <div class="input-container">
                        <label for="email" class="input-label">Email</label>
                        <input v-model="form.email" type="text" id="email" placeholder="example@example.com"
                            class="input-field">
                        <div v-if="errors.email" class="input-error">{{ errors.email }}</div>
                    </div>
                    <div class="input-container">
                        <label for="linkedin_link" class="input-label">Linkedin Profile URL</label>
                        <input v-model="form.linkedin_link" type="text" id="linkedin_link"
                            placeholder="https:\\example.com" class="input-field">
                        <div v-if="errors.linkedin_link" class="input-error">{{ errors.linkedin_link }}</div>
                    </div>
                </div>

                <h2 class="heading" data-aos="fade-up">Company Information</h2>

                <hr />

                <div class="form-group" data-aos="fade-up">
                    <div class="input-container">
                        <label for="company_description" class="input-label">Describe Company in 1-3 lines</label>
                        <textarea v-model="form.company_description" id="company_description"
                            class="input-field resize-none" rows="10"></textarea>
                        <div v-if="errors.company_description" class="input-error">{{ errors.company_description }}
                        </div>
                    </div>
                </div>

                <div class="form-group" data-aos="fade-up">
                    <div class="input-container">
                        <label for="file">Pitch Desk</label>
                        <div class="input-file">
                            <input @change="handleFileUpload" ref="fileInputRef" type="file" name="files[]" id="file" />
                            <label for="file">
                                <div class="flex flex-col text-slate-400">
                                    <span class="formbold-drop-file">
                                        <Icon name="hugeicons:cloud-upload" class="text-7xl" />
                                    </span>
                                    <span class="formbold-or text-4xl font-bold">Browse Files</span>
                                    <span class="formbold-or mt-4 text-xs font-bold">Upload up to {{ MAX_FILES }} files
                                        (PDF, DOC, DOCX, XLS, XLSX, CSV, TXT, JPG, JPEG, PNG)
                                    </span>
                                    <span class="formbold-or text-xs font-bold">Maximum file size: 20MB</span>
                                </div>
                            </label>
                        </div>
                        <div v-if="fileMessage" class="message text-xs text-red-500">{{ fileMessage }}</div>
                        <div v-if="filesArray.length > 0" class="file-info-container flex flex-col gap-2">
                            <div v-for="(file, index) in filesArray" :key="index" class="file-info p-4 rounded-xl"
                                :class="{ 'bg-red-100 border-red-500': file.error, 'bg-slate-100': !file.error }">
                                <div class="flex justify-between items-center">
                                    <p>Uploaded File: {{ file.name }}</p>
                                    <div class="flex justify-between items-center gap-2">
                                        <p>File Size: {{ file.size }}</p>
                                        <Icon v-if="!file.error" @click="deleteFile(index)"
                                            name="material-symbols:delete-outline-rounded"
                                            class="text-lg text-red-500" />
                                    </div>
                                </div>
                                <p v-if="file.error" class="text-red-500 text-sm">{{ file.error }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="form-group" data-aos="fade-up">
                    <div class="input-container">
                        <label for="industry" class="input-label">Industry</label>
                        <select v-model="form.industry" name="stage" id="industry" class="custom-select input-field">
                            <option value="">Select</option>
                            <option value="">Please Select</option>
                            <option value="FinTech">FinTech</option>
                            <option value="AgriTech">AgriTech</option>
                            <option value="PropTech">PropTech</option>
                            <option value="EduTech">EduTech</option>
                            <option value="HealthTech">HealthTech</option>
                            <option value="AeroTech">AeroTech</option>
                            <option value="BioTech">BioTech</option>
                            <option value="E-commerce">E-commerce</option>
                            <option value="SpaceTech">SpaceTech</option>
                            <option value="DeepTech">DeepTech</option>
                            <option value="Other">Other</option>
                        </select>
                        <div v-if="errors.industry" class="input-error">{{ errors.industry }}</div>
                    </div>
                    <div class="input-container">
                        <label for="stage" class="input-label">Stage</label>
                        <select v-model="form.stage" name="stage" id="stage" class="custom-select input-field">
                            <option value="">Select</option>
                            <option value="Pre Seed">Pre Seed</option>
                            <option value="Seed">Seed</option>
                            <option value="Series A">Series A</option>
                            <option value="Series B">Series B</option>
                            <option value="Series B+">Series B+</option>
                        </select>
                        <div v-if="errors.stage" class="input-error">{{ errors.stage }}</div>
                    </div>
                </div>

                <div class="form-group" data-aos="fade-up">
                    <div class="input-container">
                        <label for="target_market" class="input-label">Target Market</label>
                        <select v-model="form.target_market" name="stage" id="target_market"
                            class="custom-select input-field">
                            <option value="">Select</option>
                            <option value="UAE">UAE</option>
                            <option value="India">India</option>
                            <option value="China">China</option>
                            <option value="USA">USA</option>
                            <option value="Europe">Europe</option>
                            <option value="UK">UK</option>
                            <option value="Others">Others</option>
                        </select>
                        <div v-if="errors.target_market" class="input-error">{{ errors.target_market }}</div>
                    </div>
                    <div class="input-container">
                        <label for="product_launched" class="input-label">Product Launched</label>
                        <select v-model="form.product_launched" name="product_launched" id="product_launched"
                            class="custom-select input-field">
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <div v-if="errors.product_launched" class="input-error">{{ errors.product_launched }}</div>
                    </div>
                </div>

                <div class="form-group" data-aos="fade-up">
                    <div class="input-container">
                        <label for="comments" class="input-label">Additional Comments (Optional)</label>
                        <textarea v-model="form.comments" id="comments" class="input-field resize-none"
                            rows="10"></textarea>
                        <div v-if="errors.comments" class="input-error">{{ errors.comments }}
                        </div>
                    </div>
                </div>

                <h2 class="heading" data-aos="fade-up">Founding Team Details</h2>

                <div class="repeater">
                    <div v-for="(founder, index) in form.founders" :key="index" class="founder">
                        <div class="flex justify-between items-center">
                            <span class="subheading">Founders # {{ index + 1 }}</span>
                            <Icon v-if="form.founders.length > 1 && index > 0" @click="removeFounder(index)"
                                class="remove-button text-xl cursor-pointer" name="material-symbols:close" />
                        </div> 

                        <hr /> 
                        
                        <div class="form-group no-space" data-aos="fade-up">
                            <div class="input-container">
                                <label :for="'founder_first_name_' + index" class="input-label">Full Name</label>
                                <input v-model="founder.founder_first_name" :id="'founder_first_name_' + index"
                                    placeholder="First Name" class="input-field">
                                <div v-if="errors.founders && errors.founders[index]?.founder_first_name"
                                    class="input-error">{{ errors.founders[index].founder_first_name }}
                                </div>
                            </div>
                            <div class="input-container">
                                <label :for="'founder_last_name_' + index" class="input-label">&nbsp;</label>
                                <input v-model="founder.founder_last_name" :id="'founder_last_name_' + index"
                                    placeholder="Last Name" class="input-field">
                                <div v-if="errors.founders && errors.founders[index]?.founder_last_name"
                                    class="input-error">{{ errors.founders[index].founder_last_name }}
                                </div>
                            </div>
                        </div>

                        <div class="form-group" data-aos="fade-up">
                            <div class="input-container">
                                <label :for="'founder_email_' + index" class="input-label">Email</label>
                                <input v-model="founder.founder_email" :id="'founder_email_' + index"
                                    class="input-field">
                                <div v-if="errors.founders && errors.founders[index]?.founder_email"
                                    class="input-error">{{ errors.founders[index].founder_email }}</div>
                            </div>
                            <div class="input-container">
                                <label :for="'founder_title_' + index" class="input-label">Title</label>
                                <input v-model="founder.founder_title" :id="'founder_title_' + index"
                                    class="input-field">
                                <div v-if="errors.founders && errors.founders[index]?.founder_title"
                                    class="input-error">{{ errors.founders[index].founder_title }}</div>
                            </div>
                        </div>

                        <div class="form-group" data-aos="fade-up">
                            <div class="input-container">
                                <label :for="'founder_linkedin_link_' + index" class="input-label">LinkedIn Profile
                                    URL</label>
                                <input v-model="founder.founder_linkedin_link" :id="'founder_linkedin_link_' + index"
                                    placeholder="https:\\example.com" class="input-field">
                                <div v-if="errors.founders && errors.founders[index]?.founder_linkedin_link"
                                    class="input-error">{{ errors.founders[index].founder_linkedin_link }}</div>
                            </div>
                            <div class="input-container"></div>
                        </div>

                        <!-- <hr /> -->
                    </div>

                    <button v-if="form.founders.length < 3" @click="addFounder"
                        class="text-left w-max border-b border-black" data-aos="fade-up">+ Add
                        More</button>
                </div>

                <div class="form-group" data-aos="fade-up">
                    <button type="submit" id="submit" class="button" @click.prevent="handleSubmit">Submit</button>
                </div>
                <div v-if="submissionMessage" class="text-center"
                    :class="{'text-red-500': isError, 'text-gray-500': !isError}">{{
                    submissionMessage }}</div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import countriesData from '~/data/countries.json';
    const emit = defineEmits();

    // Country-related State
    const countries = ref([]);
    const showDropdown = ref(false);
    const selectedCountry = ref({});
    const placeholder = 'Code';
    const filteredCountries = ref([]);
    const searchQuery = ref('');
    const dropdownContainer = ref(null);
    const lastLoadedIndex = ref(0);
    const searchFlag = ref(false);
    const initialCode = ref(''); // Store initial value

    // Submission State
    const submissionMessage = ref('');
    const isSubmitting = ref(false);
    const isError = ref(false);

    // File-related State
    const fileInputRef = ref(null);
    const filesArray = ref([]);
    const fileMessage = ref('');

    // Constants
    const MAX_FOUNDERS = 3;
    const MAX_FILES = 3;

    useSeoMeta({
        title: 'Startup Application',
        description: '',

        ogTitle: 'Startup Application',
        ogDescription: '',
        ogImage: '/assets/images/share-image-startup-application.webp',

        twitterTitle: '',
        twitterDescription: '',
        twitterCard: 'summary_large_image',
    })

    const form = ref({
        company_name: '',
        link: '',
        company_location: '',
        first_name: '',
        last_name: '',
        title: '',
        code: '',
        mobile: '',
        email: '',
        linkedin_link: '',

        company_description: '',
        // file: '',
        industry: '',
        stage: '',
        target_market: '',
        product_launched: '',
        comments: '',

        founders: [{
            founder_first_name: '',
            founder_last_name: '',
            founder_email: '',
            founder_title: '',
            founder_linkedin_link: '',
        }],
    });

    const errors = ref({
        company_name: '',
        link: '',
        company_location: '',
        first_name: '',
        last_name: '',
        title: '',
        code: '',
        mobile: '',
        email: '',
        linkedin_link: '',

        company_description: '',
        file: '',
        industry: '',
        stage: '',
        target_market: '',
        product_launched: '',
        comments: '',

        founders: form.value.founders.map(() => ({
            founder_first_name: '',
            founder_last_name: '',
            founder_email: '',
            founder_title: '',
            founder_linkedin_link: '',
        }))

    });

    const validationRules = {
        company_name: {
            required: 'Please enter your company name',
            safe: 'Your input has invalid value'
        },
        link: {
            required: 'Please enter your website',
            url: 'Please enter a valid URL for your website',
            safe: 'Your input has invalid value'
        },
        company_location: {
            required: 'Please enter your company location',
            safe: 'Your input has invalid value'
        },
        first_name: {
            required: 'Please enter your first name',
            safe: 'Your input has invalid value'
        },
        last_name: {
            required: 'Please enter your last name',
            safe: 'Your input has invalid value'
        },
        title: {
            required: 'Please enter your title',
            safe: 'Your input has invalid value'
        },
        code: {
            required: 'Please choose your country code',
            code: 'Please enter a valid country code',
            safe: 'Your input has invalid value'
        },
        mobile: {
            required: 'Please enter your mobile number',
            numeric: 'Please enter a valid numeric phone number',
            length: 'Please enter a valid phone number',
            safe: 'Your input has invalid value'
        },
        email: {
            required: 'Please enter your email address',
            email: 'Please enter a valid email address',
            safe: 'Your input has invalid value'
        },
        linkedin_link: {
            required: 'Please enter your Linkedin URL',
            url: 'Please enter a valid URL for your Linkedin profile',
            safe: 'Your input has invalid value'
        },
        company_description: {
            required: 'Please leave us a company description',
            safe: 'Your input has invalid value'
        },
        file: {
            fileType: 'Invalid file type. Allowed types: pdf, doc, docx, xls, xlsx, csv, txt, jpg, jpeg, png',
            maxSize: 'File size exceeds the limit of 20MB',
        },
        industry: {
            required: 'Please choose your industry',
            safe: 'Your input has invalid value'
        },
        stage: {
            required: 'Please choose your stage',
            safe: 'Your input has invalid value'
        },
        target_market: {
            required: 'Please choose your target market',
            safe: 'Your input has invalid value'
        },
        product_launched: {
            required: 'Please specify if your product is launched',
            safe: 'Your input has invalid value'
        },
        comments: {
            safe: 'Your input has invalid value'
        },
        founders: {
            required: 'Please add at least one founder',
            items: {
                founder_first_name: {
                    required: 'Please enter a first name',
                    safe: 'Your input has invalid value'
                },
                founder_last_name: {
                    required: 'Please enter a last name',
                    safe: 'Your input has invalid value'
                },
                founder_email: {
                    required: 'Please enter an email address',
                    email: 'Please enter a valid email address',
                    safe: 'Your input has invalid value'
                },
                founder_title: {
                    required: 'Please enter a title',
                    safe: 'Your input has invalid value'
                },
                founder_linkedin_link: {
                    required: 'Please enter a Linkedin URL',
                    url: 'Please enter a valid URL for the Linkedin profile',
                    safe: 'Your input has invalid value'
                },
            }
        }
    };

    // Founders Repeater
    const addFounder = () => {
        if (form.value.founders.length < MAX_FOUNDERS) {
            form.value.founders.push({
                founder_first_name: '',
                founder_last_name: '',
                founder_email: '',
                founder_title: '',
                founder_linkedin_link: '',
            });
            errors.value.founders.push({
                founder_first_name: '',
                founder_last_name: '',
                founder_email: '',
                founder_title: '',
                founder_linkedin_link: '',
            });
        }
        // else {
        //     alert(`You can only add up to ${MAX_FOUNDERS} founders.`);
        // }
    };

    const removeFounder = (index) => {
        form.value.founders.splice(index, 1);
        errors.value.founders.splice(index, 1);
    };

    // Files Uploads 
    const formatFileSize = (size) => {
        if (size === 0) return '0 bytes';
        const k = 1024;
        const sizes = ['bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(size) / Math.log(k));
        return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const validateFile = (file) => {
        const allowedTypes = ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'csv', 'txt', 'jpg', 'jpeg', 'png'];
        const maxSize = 20 * 1024 * 1024; // 20MB

        let error = '';

        if (!allowedTypes.includes(file.type.split('/')[1])) {
            error = validationRules.file.fileType;
        } else if (file.size > maxSize) {
            error = validationRules.file.maxSize;
        }

        return error;
    };

    const isFileAlreadyAdded = (file) => {
        return filesArray.value.some(existingFile =>
            existingFile.file.name === file.name && existingFile.file.size === file.size
        );
    };

    const deleteFile = (index) => {
        // Remove the file from the filesArray
        filesArray.value.splice(index, 1);

        // Optionally clear invalid files array if needed
        // invalidFiles.value = [];

        // Update the file message if needed
        fileMessage.value = '';

        // Optional: you may want to revalidate the file count here
    };

    const handleFileUpload = (event) => {
        const selectedFiles = Array.from(event.target.files);
        const validFiles = [];
        const invalidFiles = [];

        // Check if we can still add more files
        const currentValidFileCount = filesArray.value.filter(file => !file.error).length;

        if (currentValidFileCount >= MAX_FILES) {
            fileMessage.value = `You can only upload up to ${MAX_FILES} files.`;
            return;
        }

        selectedFiles.forEach(file => {
            const error = validateFile(file);
            const isAlreadyAdded = isFileAlreadyAdded(file);

            if (error) {
                invalidFiles.push({ file, error });
            } else if (isAlreadyAdded) {
                // invalidFiles.push({ file, error: 'File already uploaded' });
            } else {
                validFiles.push(file);
            }

        });

        // Calculate the number of additional valid files we can add
        const remainingCapacity = MAX_FILES - currentValidFileCount;

        if (validFiles.length > remainingCapacity) {
            fileMessage.value = `You can only upload ${remainingCapacity} more files.`;
            return;
        }

        // Add valid files to the array
        filesArray.value = [...filesArray.value, ...validFiles.map(file => ({
            file,
            name: file.name,
            size: formatFileSize(file.size),
            error: ''
        }))];

        // Add invalid files to the array with error messages
        filesArray.value = [
            ...filesArray.value,
            ...invalidFiles.map(({ file, error }) => ({
                file,
                name: file.name,
                size: formatFileSize(file.size),
                error
            }))
        ];

        // Clear invalid files after 2 seconds
        setTimeout(() => {
            filesArray.value = filesArray.value.filter(file => !invalidFiles.some(invalid => invalid.file.name === file.file.name && invalid.file.size === file.file.size));
            invalidFiles.length = 0; // Clear the invalidFiles array
        }, 2000);

        event.target.value = '';
    };

    // Submitting the form
    const handleSubmit = async () => {
        // Disable the submit button
        isSubmitting.value = true;

        // Clear previous file validation errors
        fileMessage.value = '';

        // Validate form fields
        const isFormValid = validateForm(form, errors, validationRules);

        // Filter out valid files
        const validFiles = filesArray.value.filter(file => !file.error);

        // Check if there is at least one valid file
        const isFileValid = validFiles.length > 0;

        // Update file validation message if no valid files
        if (!isFileValid) {
            fileMessage.value = 'Please upload at least one valid file.';
        }

        // If either form or file validation fails, stop submission
        if (!isFormValid || !isFileValid) {
            // console.log('Validation failed:', errors.value);
            isSubmitting.value = false; // Re-enable the button
            submissionMessage.value = 'Please ensure all required fields are correctly filled and try submitting again.'; // Re-enable the butto
            isError.value = true;
            return; // Stop submission if form or file validation fails
        }

        try {
            const API_ENDPOINT = 'https://backend.montycapital.com/wp-json/contact-form-7/v1/contact-forms/6/feedback';
            const formData = new FormData();

            // Append top-level fields

            Object.keys(form.value).forEach((key) => {
                if (key !== 'files' && key !== 'founders') {
                    formData.append(key, form.value[key]);
                }
            });

            validFiles.forEach((file, index) => {
                formData.append(`file_${index + 1}`, file.file);
            });

            // Append founders
            form.value.founders.forEach((founder, index) => {
                formData.append(`founder_${index + 1}_first_name`, founder.founder_first_name);
                formData.append(`founder_${index + 1}_last_name`, founder.founder_last_name);
                formData.append(`founder_${index + 1}_email`, founder.founder_email);
                formData.append(`founder_${index + 1}_title`, founder.founder_title);
                formData.append(`founder_${index + 1}_linkedin_link`, founder.founder_linkedin_link);
            });

            formData.append('_wpcf7_unit_tag', 'rte');

            // for (let pair of formData.entries()) {
            //     console.log(`${pair[0]}: ${pair[1] instanceof File ? pair[1].name : pair[1]}`);
            // }

            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json',
                    // 'Content-Type': 'multipart/form-data' // No need to set this header for FormData
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            // console.log("Form submitted successfully:", data);

            submissionMessage.value = "Thank you for your message."
            isError.value = false;
            // Clear success message after 2 seconds
            setTimeout(() => {
                submissionMessage.value = '';
            }, 2000);

            resetForm();
            //Handle success response, such as notifying the user or redirecting
        } catch (error) {
            console.error("Form submission error:", error);
            // Set error message
            submissionMessage.value = "Error in submitting your message.";
            isError.value = true;

            // Clear error message after 2 seconds
            setTimeout(() => {
                submissionMessage.value = '';
            }, 2000);
        } finally {
            // Re-enable the submit button
            isSubmitting.value = false;
        }
    };

    const resetForm = () => {
        form.value = {
            company_name: '',
            link: '',
            company_location: '',
            first_name: '',
            last_name: '',
            title: '',
            code: selectedCountry.value ? selectedCountry.value.code : initialCode.value,
            mobile: '',
            email: '',
            linkedin_link: '',
            company_description: '',
            industry: '',
            stage: '',
            target_market: '',
            product_launched: '',
            comments: '',
            founders: [{
                founder_first_name: '',
                founder_last_name: '',
                founder_email: '',
                founder_title: '',
                founder_linkedin_link: '',
            }],
        };
        errors.value = {
            company_name: '',
            link: '',
            company_location: '',
            first_name: '',
            last_name: '',
            title: '',
            // code: initialCode.value,
            code: '',
            mobile: '',
            email: '',
            linkedin_link: '',
            company_description: '',
            file: '',
            industry: '',
            stage: '',
            target_market: '',
            product_launched: '',
            comments: '',
            founders: form.value.founders.map(() => ({
                founder_first_name: '',
                founder_last_name: '',
                founder_email: '',
                founder_title: '',
                founder_linkedin_link: '',
            }))
        };
        filesArray.value = []; // Clear the files array
        if (fileInputRef.value) {
            fileInputRef.value.value = ''; // Clear the file input field
        }
    };

    // Choosing Country
    const toggleDropdown = () => {
        showDropdown.value = !showDropdown.value;

        // Reset country list and lastLoadedIndex when closing the dropdown
        if (!showDropdown.value) {
            resetDropdown();
        }
    };

    const resetDropdown = () => {
        countries.value = [];
        lastLoadedIndex.value = 0;
        filteredCountries.value = [];
        searchFlag.value = false
        searchQuery.value = ''
        loadInitialCountries();
    };

    const closeDropdown = () => {
        loadInitialCountries();
    };

    const selectCountry = (country) => {
        selectedCountry.value = country;
        form.value.code = country.code;
        emit('select', country);
        showDropdown.value = false;
        resetDropdown()
    };

    onMounted(async () => {
        loadInitialCountries();

        try {
            const response = await fetch('/api/geoip');
            const data = await response.json();

            if (data && data.country) {
                const detectedCountry = countriesData.find(country => country.iso2 === data.country);
                //&& !selectedCountry.value
                if (detectedCountry) {
                    if (!selectedCountry.value || !selectedCountry.value.iso2) {
                        selectedCountry.value = detectedCountry;
                        form.value.code = detectedCountry.code;
                        initialCode.value = detectedCountry.code
                    }
                } else {
                    console.warn('Detected country not found in countries data'); // Debug log
                }
            } else {
                errors.value.country = 'No country data found';
            }
        } catch (error) {
            console.error('Error detecting country:', error);
            errors.value.country = 'Unable to detect country';
        }
    });

    const loadInitialCountries = () => {
        loadNextCountries();
    };

    const loadNextCountries = () => {
        const batchSize = 10;
        const startIndex = lastLoadedIndex.value;
        const endIndex = startIndex + batchSize;
        const nextBatch = countriesData.slice(startIndex, endIndex);

        countries.value = [...countries.value, ...nextBatch];
        lastLoadedIndex.value = endIndex;
        filteredCountries.value = countries.value;
    };

    const handleScroll = () => {
        const container = dropdownContainer.value;
        if (searchQuery.value === '' && container.scrollTop + container.clientHeight >= container.scrollHeight - 20) {
            if (!searchFlag.value) {
                loadNextCountries();
            }
        }
    };

    const searchCountries = () => {
        const searchResults = countriesData.filter((country) =>
            country.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
        if (searchQuery.value != '') {
            filteredCountries.value = searchResults;
            searchFlag.value = true
        }
        else {
            resetDropdown();
        }
    };

    watch(searchQuery, searchCountries);
</script>

<style lang="sass">

</style>